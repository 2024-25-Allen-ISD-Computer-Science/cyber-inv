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

export default function LoginForm() {
  const [forms, setForms] = React.useState([{}]);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  // Function to add a new form (limit to 2 forms)
  const addForm = () => {
    if (forms.length < 2) {
      setForms([...forms, {}]);
    }
  };

  // Function to remove a form by index
  const removeForm = (index: number) => {
    const newForms = forms.filter((_, i) => i !== index);
    setForms(newForms);
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove corresponding file
  };

  // Function to handle file selection for each team member
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = file; // Set the file for the corresponding team member
        return updatedFiles;
      });
      console.log(`Selected file for Team Member ${index + 1}:`, file);
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
              <form className="w-full h-full bg-transparent space-y-4 px-4 py-2">
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={`email-${index}`}>Email Address</Label>
                    <Input
                      id={`email-${index}`}
                      placeholder="Email Address"
                      type="email"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor={`name-${index}`}>First and last name</Label>
                    <Input
                      id={`name-${index}`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor={`school-${index}`}>School Name</Label>
                    <Input
                      id={`school-${index}`}
                      placeholder="Enter your School Name"
                      required
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
                    />
                  </div>

                  <div>
                    <Label htmlFor={`confirmPassword-${index}`}>Confirm Password</Label>
                    <Input
                      id={`confirmPassword-${index}`}
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
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
