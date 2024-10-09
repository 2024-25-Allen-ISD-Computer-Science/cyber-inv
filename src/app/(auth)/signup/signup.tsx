"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Grade from "@/components/Grade"; // Assuming this is a custom component
import { FaCloudUploadAlt } from "react-icons/fa";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { useRouter } from "next/navigation";
import pb from "@/app/api/pocketbase";

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

export default function LoginForm() {
  const [teamName, setTeamName] = React.useState<string>("");
  const [forms, setForms] = React.useState<FormData[]>([
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
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const router = useRouter();

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

  // Function to handle file uploads
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const updatedForms = [...forms];
      updatedForms[index] = { ...updatedForms[index], file }; // Attach the file to the corresponding form
      setForms(updatedForms);

      // Also update the selectedFiles array to maintain consistency
      const updatedFiles = [...selectedFiles];
      updatedFiles[index] = file;
      setSelectedFiles(updatedFiles);
    }
  };

  // Function to add a new form (limit to 2 forms)
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
    }
  };

  // Function to remove a form
  const removeForm = (index: number) => {
    const updatedForms = forms.filter((_, formIndex) => formIndex !== index);
    setForms(updatedForms);

    const updatedFiles = selectedFiles.filter(
      (_, fileIndex) => fileIndex !== index
    );
    setSelectedFiles(updatedFiles);
  };

  // Helper function to validate each form's fields
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

      // Check if passwords match
      if (form.password !== form.confirmPassword) {
        alert(`Passwords do not match for team member ${i + 1}`);
        return false;
      }
    }

    setError(null); // Clear the error if all validations pass
    return true;
  };

  // Function to handle form submission
  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate all forms before submission
    if (!validateForm()) return;

    try {
      // Loop through each form and create a record for each
      for (const form of forms) {
        const formData = new FormData(); // Create FormData object to handle both text and file inputs

        // Append regular text fields including team name
        formData.append("teamName", teamName); // Append the team name
        formData.append("email", form.email);
        formData.append("name", form.name);
        formData.append("school", form.school);
        formData.append("password", form.password);
        formData.append("passwordConfirm", form.confirmPassword);

        // Append the uploaded file (School ID photo)
        if (form.file) {
          formData.append("PhotoID", form.file); // Ensure this matches the field name in the PocketBase collection
        }

        // Send the request to PocketBase
        const createdRecord = await pb.collection("player").create(formData);
        console.log("Player created:", createdRecord);
      }

      // Redirect to the dashboard or desired page on success
      router.push("/dashboard/queue");
    } catch (error) {
      console.error("Error creating players:", error);
      setError("Failed to create players.");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-center px-4 py-8">
      
      {/* Search bar on top */}
      <div className="w-full max-w-4xl mb-6">
        <Label htmlFor="team-name">Team Name</Label>
        <Input
          id="team-name"
          placeholder="Enter your team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Form in the middle hellogit*/}
      <div className="w-full max-w-7xl flex  flex-col md:flex-row items-center gap-5">
        {forms.map((_, index) => (
          <div key={index} className="w-full max-w-2xl">
            <Card className="w-full h-auto drop-shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Team Member #{index + 1} - Sign up
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 px-4 py-2">
                <div>
                  <Label htmlFor={`email-${index}`}>Email Address</Label>
                  <Input
                    id={`email-${index}`}
                    placeholder="Email Address"
                    type="email"
                    required
                    value={forms[index].email}
                    onChange={(e) =>
                      handleInputChange(index, "email", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label htmlFor={`name-${index}`}>
                    First and last name
                  </Label>
                  <Input
                    id={`name-${index}`}
                    placeholder="Enter your full name"
                    required
                    value={forms[index].name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label htmlFor={`school-${index}`}>School Name</Label>
                  <Input
                    id={`school-${index}`}
                    placeholder="Enter your School Name"
                    required
                    value={forms[index].school}
                    onChange={(e) =>
                      handleInputChange(index, "school", e.target.value)
                    }
                  />
                </div>

                <div className="inline-flex justify-between w-full md:flex-col gap-4">
                  <div className="grid-cols-1">
                    <Label htmlFor={`Grade-${index}`}>Grade Level</Label>
                    <Grade
                      value={forms[index].grade}
                      onChange={(newGrade) =>
                        handleGradeChange(index, newGrade)
                      }
                    />
                  </div>

                  <div className="grid-cols-1">
                    <Label htmlFor={`school-id-${index}`}>
                      School ID photo
                    </Label>
                    <input
                      id={`file-upload-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, index)}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      onClick={() =>
                        document
                          .getElementById(`file-upload-${index}`)
                          ?.click()
                      }
                    >
                      <FaCloudUploadAlt className="h-6 w-6" />
                      {selectedFiles[index]
                        ? selectedFiles[index].name
                        : "Upload ID"}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor={`password-${index}`}>Password</Label>
                  <Input
                    id={`password-${index}`}
                    type="password"
                    placeholder="Password"
                    required
                    value={forms[index].password}
                    onChange={(e) =>
                      handleInputChange(index, "password", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label htmlFor={`confirmPassword-${index}`}>
                    Confirm Password
                  </Label>
                  <Input
                    id={`confirmPassword-${index}`}
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={forms[index].confirmPassword}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "confirmPassword",
                        e.target.value
                      )
                    }
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeForm(index)}
                >
                  <HiOutlineMinusSm className="h-5 w-5" />
                  Remove Member
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}

      </div>
        <Button type="button" onClick={addForm} disabled={forms.length >= 2}>
          <HiOutlinePlusSm className="h-5 w-5" />
          Add Member
        </Button>

      {/* Submit button at the bottom */}
      <div className="w-full max-w-4xl mt-6">
        <Button className="w-full" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </main>
  );
}
