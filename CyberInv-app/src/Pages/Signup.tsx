import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import pb from "@/api/pocketbase";
import Grade from "@/components/Grade"; // Your Grade component
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// Define the type for the form
interface FormData {
  email: string;
  name: string;
  school: string;
  password: string;
  confirmPassword: string;
  grade: string;
  file: File | null;
}

export default function TeamMemberSignUp() {
  const [teamName, setTeamName] = useState<string>("");
  const [forms, setForms] = useState<FormData[]>([
    {
      email: "",
      name: "",
      school: "",
      password: "",
      confirmPassword: "",
      grade: "",
      file: null,
    },
  ]);
  const [activeTab, setActiveTab] = useState<string>("teamMember1");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Function to handle form input changes
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedForms = [...forms];
    updatedForms[index] = { ...updatedForms[index], [field]: value };
    setForms(updatedForms);
  };

  const handleGradeChange = (index: number, grade: string) => {
    const updatedForms = [...forms];
    updatedForms[index].grade = grade;
    setForms(updatedForms);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0] || null; // Get the selected file
    const updatedForms = [...forms];
    updatedForms[index] = { ...updatedForms[index], file }; // Update the file state
    setForms(updatedForms); // Update forms state
  };

  const addForm = () => {
    if (forms.length < 2) {
      setForms([
        ...forms,
        {
          email: "",
          name: "",
          school: "",
          password: "",
          confirmPassword: "",
          grade: "",
          file: null,
        },
      ]);
      setActiveTab("teamMember2");
    }
  };

  const removeForm = () => {
    setForms(forms.slice(0, 1)); // Remove the second form by slicing the array
    setActiveTab("teamMember1"); // Switch back to the first tab
  };

  const validateForm = () => {
    if (!teamName) {
      setError("Please provide a team name.");
      return false;
    }

    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];
      if (
        !form.email ||
        !form.name ||
        !form.school ||
        !form.password ||
        !form.confirmPassword ||
        !form.grade ||
        !form.file
      ) {
        alert(`Please fill in all fields for team member ${i + 1}`);
        return false;
      }
      if (form.password !== form.confirmPassword) {
        alert(`Passwords do not match for team member ${i + 1}`);
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      for (const form of forms) {
        const formData = new FormData();

        formData.append("teamName", teamName);
        formData.append("email", form.email);
        formData.append("name", form.name);
        formData.append("school", form.school);
        formData.append("password", form.password);
        formData.append("passwordConfirm", form.confirmPassword);
        formData.append("grade", form.grade); // Include grade in FormData
        if (form.file) {
          formData.append("PhotoID", form.file);
        }
        const createdRecord = await pb.collection("player").create(formData);
        console.log("Player created:", createdRecord);

        // Store relevant data in local storage
        localStorage.setItem(
          `teamMember_${form.email}`,
          JSON.stringify({
            name: form.name,
            email: form.email,
            school: form.school,
            grade: form.grade,
          })
        );
      }

      setSuccess("Players created successfully!");
      
      // Redirect to /dashboard/queue after successful creation
      navigate("/tmp");

    } catch (error) {
      console.error("Error creating players:", error);
      setError("Failed to create players.");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-center px-4 py-8">
      <div className="w-full max-w-2xl mb-4 flex justify-end ">
        <Button
          variant="outline"
          onClick={addForm}
          disabled={forms.length >= 2}
          className="shadow-2xl"
        >
          <CiCirclePlus className="mr-2 size-9" />
          Add Member
        </Button>
      </div>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {/* Tab Layout for Team Member Forms */}
      <Tabs
        defaultValue="teamMember1"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-2xl mx-auto "
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="teamMember1">Team Member 1</TabsTrigger>
          {forms.length > 1 && (
            <TabsTrigger value="teamMember2">Team Member 2</TabsTrigger>
          )}
        </TabsList>

        {/* Team Member 1 Form */}
        <TabsContent value="teamMember1">
          <Card className="w-full drop-shadow-xl p-4 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Team Member #1 - Sign up
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="team-name">Team Name</Label>
                <Input
                  id="team-name"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email-1">Email Address</Label>
                <Input
                  id="email-1"
                  placeholder="Email Address"
                  type="email"
                  required
                  value={forms[0].email}
                  onChange={(e) =>
                    handleInputChange(0, "email", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="name-1">Full Name</Label>
                <Input
                  id="name-1"
                  placeholder="Enter your full name"
                  required
                  value={forms[0].name}
                  onChange={(e) =>
                    handleInputChange(0, "name", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="school-1">School Name</Label>
                <Input
                  id="school-1"
                  placeholder="Enter your school name"
                  required
                  value={forms[0].school}
                  onChange={(e) =>
                    handleInputChange(0, "school", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="grade-1">Grade Level</Label>
                <Grade
                  value={forms[0].grade}
                  onChange={(newGrade) => handleGradeChange(0, newGrade)}
                />
              </div>
              <div>
                <Label htmlFor="password-1">Password</Label>
                <Input
                  id="password-1"
                  type="password"
                  placeholder="Enter your password"
                  value={forms[0].password}
                  onChange={(e) =>
                    handleInputChange(0, "password", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirm-password-1">Confirm Password</Label>
                <Input
                  id="confirm-password-1"
                  type="password"
                  placeholder="Confirm your password"
                  value={forms[0].confirmPassword}
                  onChange={(e) =>
                    handleInputChange(0, "confirmPassword", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="file-1">Upload School Photo ID</Label>
                <Input
                  id="file-1"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 0)}
                />
                {forms[0].file && (
                  <p className="text-gray-500">
                    Selected file: {forms[0].file.name}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Member 2 Form */}
        {forms.length > 1 && (
          <TabsContent value="teamMember2">
            <Card className="w-full drop-shadow-xl p-4">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Team Member #2 - Sign up
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email-2">Email Address</Label>
                  <Input
                    id="email-2"
                    placeholder="Email Address"
                    type="email"
                    required
                    value={forms[1].email}
                    onChange={(e) =>
                      handleInputChange(1, "email", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="name-2">Full Name</Label>
                  <Input
                    id="name-2"
                    placeholder="Enter your full name"
                    required
                    value={forms[1].name}
                    onChange={(e) =>
                      handleInputChange(1, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="school-2">School Name</Label>
                  <Input
                    id="school-2"
                    placeholder="Enter your school name"
                    required
                    value={forms[1].school}
                    onChange={(e) =>
                      handleInputChange(1, "school", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="grade-2">Grade Level</Label>
                  <Grade
                    value={forms[1].grade}
                    onChange={(newGrade) => handleGradeChange(1, newGrade)}
                  />
                </div>
                <div>
                  <Label htmlFor="password-2">Password</Label>
                  <Input
                    id="password-2"
                    type="password"
                    placeholder="Enter your password"
                    value={forms[1].password}
                    onChange={(e) =>
                      handleInputChange(1, "password", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirm-password-2">Confirm Password</Label>
                  <Input
                    id="confirm-password-2"
                    type="password"
                    placeholder="Confirm your password"
                    value={forms[1].confirmPassword}
                    onChange={(e) =>
                      handleInputChange(1, "confirmPassword", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="file-2">Upload Photo ID</Label>
                  <Input
                    id="file-2"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 1)}
                  />
                  {forms[1].file && (
                    <p className="text-gray-500">
                      Selected file: {forms[1].file.name}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={removeForm} className="shadow-2xl">
                    Remove Team Member 2
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>

      <Button onClick={handleSignUp} className="mt-4 shadow-2xl">
        Sign Up
      </Button>
    </main>
  );
}
