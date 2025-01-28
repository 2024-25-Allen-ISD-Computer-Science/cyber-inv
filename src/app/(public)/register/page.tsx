// signup.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpSolo, signUpTeam } from '@/api/Auth';

export default function SignUpPage() {
    const [step, setStep] = useState("choice"); // "choice", "solo", "team"

    const handleSoloSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await signUpSolo(formData);
    };

    const handleTeamSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        // Log form data for debugging
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            await signUpTeam(formData);
            alert("Team created successfully!");
        } catch (error) {
            console.error("Error creating team:", error);
            alert("Failed to create team. Please check the console for details.");
        }
    };

    return (
        <main className="w-full h-full flex justify-center items-center">
            {step === "choice" && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Sign-Up Form</CardTitle>
                        <CardDescription>Will you be Solo or a Duo?</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4 justify-between">
                        <Button onClick={() => setStep("solo")} variant="outline">
                            Solo
                        </Button>
                        <Button onClick={() => setStep("team")} variant="outline">
                            Team
                        </Button>
                    </CardContent>
                </Card>
            )}

            {step === "solo" && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Solo Sign-Up</CardTitle>
                        <CardDescription>Fill out your personal details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSoloSubmit} className="flex flex-col gap-4">
                            <Input name="teamName" type="text" placeholder="Team Name" className="pb-2 border rounded-md" />
                            <Input name="name" type="text" placeholder="Name" className="pb-2 border rounded-md" />
                            <Input name="email" type="email" placeholder="Email" className="pb-2 border rounded-md" />
                            <Input name="password" type="password" placeholder="Password" className="pb-2 border rounded-md" />
                            <Input name="confirmPassword" type="password" placeholder="Confirm Password" className="pb-2 border rounded-md" />
                            <Label htmlFor="school-id">School ID</Label>
                            <Button type="submit" className="bg-blue-500 text-white">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" onClick={() => setStep("choice")}>
                            Back
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {step === "team" && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Team Sign-Up</CardTitle>
                        <CardDescription>Fill out details for each team member</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleTeamSubmit} className="flex flex-col gap-4">
                            <Input name="teamName" type="text" placeholder="Team Name" className="pb-2 border rounded-md" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">Member 1</h3>
                                    <Input name="member1Name" type="text" placeholder="Name" className="pb-2 border rounded-md" />
                                    <Input name="member1Email" type="email" placeholder="Email" className="pb-2 border rounded-md" />
                                    <Input name="member1Password" type="password" placeholder="Password" className="pb-2 border rounded-md" />
                                    <Input name="member1ConfirmPassword" type="password" placeholder="Confirm Password" className="pb-2 border rounded-md" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">Member 2</h3>
                                    <Input name="member2Name" type="text" placeholder="Name" className="pb-2 border rounded-md" />
                                    <Input name="member2Email" type="email" placeholder="Email" className="pb-2 border rounded-md" />
                                    <Input name="member2Password" type="password" placeholder="Password" className="pb-2 border rounded-md" />
                                    <Input name="member2ConfirmPassword" type="password" placeholder="Confirm Password" className="pb-2 border rounded-md" />
                                </div>
                            </div>
                            <Button type="submit" className="bg-blue-500 text-white">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setStep("choice")}>
                            Back
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </main>
    );
}