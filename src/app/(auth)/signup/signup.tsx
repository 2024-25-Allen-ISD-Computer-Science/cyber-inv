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
import Grade from "@/components/Grade";
import { FaCloudUploadAlt } from "react-icons/fa";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import pb from "@/app/api/pocketbase"; // PocketBase API integration

export default function LoginForm() {
  const [forms, setForms] = React.useState([{ email: "", name: "", school: "", password: "", confirmPassword: "", grade: "", file: null }]);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  // Function to handle form input changes
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedForms = [...forms];
    updatedForms[index] = { ...updatedForms[index], [field]: value };
    setForms(updatedForms);
  };

  // Function to handle file uploads
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
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
      setForms([...forms, { email: "", name: "", school: "", password: "", confirmPassword: "", grade: "", file: null }]);
    }
  };

  // Function to handle form submission
  const handleSignUp = async (event: React.FormEvent, index: number) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    const form = forms[index];
  
    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!"); // Display an error message to the user
      return; // Stop form submission if passwords don't match
    }
  
    const formData = new FormData(); // Create FormData object to handle both text and file inputs
  
    // Append regular text fields
    formData.append("email", form.email);
    formData.append("name", form.name);
    formData.append("school", form.school);
    formData.append("password", form.password);
    formData.append("passwordConfirm", form.confirmPassword);
  
    // Append the uploaded file (School ID photo)
    const file = form.file;
    if (file) {
      formData.append("PhotoID", file); // Ensure this matches the field name in the PocketBase collection
    }
  
    try {
      // Send the request to PocketBase
      const createdRecord = await pb.collection("player").create(formData);
      console.log("Player created:", createdRecord);
  
      // Redirect to the dashboard or desired page on success
      router.push("/dashboard/queue");
    } catch (error) {
      console.error("Error creating player:", error);
      // Handle error (e.g., display a message to the user)
    }
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {forms.map((_, index) => (
          <div key={index} className="w-full flex flex-col md:flex-row gap-4 items-start">
            {/* Card for the form */}
            <Card className="w-full h-auto drop-shadow-2xl max-w-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Team Member #{index + 1} - Sign up
                </CardTitle>
              </CardHeader>

              {/* Form starts here */}
              <form className="w-full h-full bg-transparent space-y-4 px-4 py-2" onSubmit={(e) => handleSignUp(e, index)}>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={`email-${index}`}>Email Address</Label>
                    <Input
                      id={`email-${index}`}
                      placeholder="Email Address"
                      type="email"
                      required
                      value={forms[index].email}
                      onChange={(e) => handleInputChange(index, "email", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`name-${index}`}>First and last name</Label>
                    <Input
                      id={`name-${index}`}
                      placeholder="Enter your full name"
                      required
                      value={forms[index].name}
                      onChange={(e) => handleInputChange(index, "name", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`school-${index}`}>School Name</Label>
                    <Input
                      id={`school-${index}`}
                      placeholder="Enter your School Name"
                      required
                      value={forms[index].school}
                      onChange={(e) => handleInputChange(index, "school", e.target.value)}
                    />
                  </div>

                  <div className="inline-flex justify-between w-full md:flex-col gap-4">
                    <div className="grid-cols-1">
                      <Label htmlFor={`Grade-${index}`}>Grade Level</Label>
                      <Grade />
                    </div>

                    <div className="grid-cols-1">
                      <Label htmlFor={`school-id-${index}`}>School ID photo</Label>
                      {/* Hidden file input */}
                      <input
                        id={`file-upload-${index}`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, index)}
                        className="hidden"
                      />
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById(`file-upload-${index}`)?.click()}
                      >
                        <FaCloudUploadAlt className="h-6 w-6" />
                        {selectedFiles[index] ? selectedFiles[index].name : "Upload ID"}
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
                      onChange={(e) => handleInputChange(index, "password", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`confirmPassword-${index}`}>Confirm Password</Label>
                    <Input
                      id={`confirmPassword-${index}`}
                      type="password"
                      placeholder="Confirm password"
                      required
                      value={forms[index].confirmPassword}
                      onChange={(e) => handleInputChange(index, "confirmPassword", e.target.value)}
                    />
                  </div>

                  {/* Display error/success message */}
                  {error && <div className="text-red-500">{error}</div>}
                  {success && <div className="text-green-500">{success}</div>}
                </CardContent>

                {/* Footer with a submit button */}
                <CardFooter className="w-full flex justify-end gap-4">
                  <Button type="submit">Sign Up</Button>
                </CardFooter>
              </form>
            </Card>

            {/* Minus button to remove the form */}
            <Button
              variant="outline"
              onClick={() => removeForm(index)}
              className="h-fit"
            >
              <HiOutlineMinusSm className="h-6 w-6" />
            </Button>
          </div>
        ))}

        {/* Plus button to add a new form (disabled if 2 forms are already present) */}
        {forms.length < 2 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={addForm}>
              <HiOutlinePlusSm className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
