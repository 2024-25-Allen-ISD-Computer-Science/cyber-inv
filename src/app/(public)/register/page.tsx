"use client"
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function LoginPage() {
    // State to track the current step
    const [step, setStep] = useState("choice"); // "choice", "solo", "team"

    return (
        <main className="w-full h-full flex justify-center items-center">
            {step === "choice" && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Sign up form</CardTitle>
                        <CardDescription>Will you be Solo or a team?</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full justify-between flex">
                        <Button
                            className="bg-slate-400"
                            onClick={() => setStep("solo")}
                            variant={"outline"}
                        >
                            Solo
                        </Button>
                        <Button
                            className="bg-green-400"
                            onClick={() => setStep("team")}
                            variant={"outline"}
                        >
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
                        <form className="flex flex-col gap-4">
                            <Input
                                type="text"
                                placeholder="Name"
                                className="pb-2 border rounded-md"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                className="pb-2 border rounded-md"
                            />
                            <Input
                                type="password"
                                placeholder="password"
                                className="pb-2 border rounded-md"
                            />
                            <Input
                                type="confirm"
                                placeholder="confirm"
                                className="pb-2 border rounded-md"
                            />
                            <Button type="submit" className="bg-blue-500 text-white">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant={"outline"}
                            onClick={() => setStep("choice")}
                            className="bg-gray-300"
                        >
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
                        <form className="flex flex-row gap-4">
                            <div className="flex flex-col  gap-4">
                                <h3 className="font-bold">Member 1</h3>
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    className="pb-2 border rounded-md"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="pb-2 border rounded-md"
                                />
                                <Input
                                    type="password"
                                    placeholder="password"
                                    className="pb-2 border rounded-md"
                                />
                                <Input
                                    type="confirm"
                                    placeholder="confirm"
                                    className="pb-2 border rounded-md"
                                />
                            </div>
                            <div className="flex flex-col  gap-4">
                                <h3 className="font-bold">Member 2</h3>
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    className="pb-2 border rounded-md"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="pb-2 border rounded-md"
                                />
                                <Input
                                    type="password"
                                    placeholder="password"
                                    className="pb-2 border rounded-md"
                                />
                                <Input
                                    type="confirm"
                                    placeholder="confirm"
                                    className="pb-2 border rounded-md"
                                />
                            </div>
               
                        </form>
                    </CardContent>
                    <CardFooter className="w-full justify-between">
                        <Button
                            variant={"outline"}
                            onClick={() => setStep("choice")}
                            className="bg-gray-300"
                        >
                            Back
                        </Button>
                        <Button type="submit" className="bg-blue-500 text-white">
                                Submit
                            </Button>
                    </CardFooter>
                </Card>
            )}
        </main>
    );
}
