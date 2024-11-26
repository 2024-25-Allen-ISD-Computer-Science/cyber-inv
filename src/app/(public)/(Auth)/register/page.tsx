'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function LoginPage() {
    const { push } = useRouter(); // To push the user to another page once logged in

    // State to track the current step
    const [step, setStep] = useState('choice'); // "choice", "solo", "team"
    const [invalid, setInvalid] = useState(false);

    async function submitSolo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // prevent's the default form post thing that forms do
        const formData = new FormData(event.currentTarget); // Get data from the form
        const response = await fetch('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
            }),
        }); // Send a response to the api at /api/admin (where authentication is handled)

        const data = await response.json();

        if (!data.loggedIn) {
            // If the post request returns that the user did not log in, it sets the <p> element to notify the user
            // Note: The above has nothing to do with security and is just used for redirecting the user (A JWT token is used instead in middleware to detect login)
            setInvalid(true);
        } else {
            push('/dashboard'); // If the user logged in, redirect to the dashboard
        }
    }

    return (
        <main className="w-full h-full flex justify-center items-center">
            {step === 'choice' && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Sign-Up Form</CardTitle>
                        <CardDescription>Will you be Solo or a Duo?</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4 justify-between">
                        <Button onClick={() => setStep('solo')} variant="outline">
                            Solo
                        </Button>
                        <Button onClick={() => setStep('team')} variant="outline">
                            Team
                        </Button>
                    </CardContent>
                </Card>
            )}
            {/* Solo form elements:
                - Team Name
                - Name
                - Email
                - Password
                - School ID
            */}
            {step === 'solo' && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Solo Sign-Up</CardTitle>
                        <CardDescription>Fill out your personal details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <Input type="text" placeholder="Team Name" className="pb-2 border rounded-md" />
                            <Input type="text" placeholder="Name" className="pb-2 border rounded-md" />
                            <Input type="email" placeholder="Email" className="pb-2 border rounded-md" />
                            <Input type="password" placeholder="Password" className="pb-2 border rounded-md" />
                            <Input type="password" placeholder="Confirm Password" className="pb-2 border rounded-md" />
                            <Label htmlFor="school-id">School ID</Label>
                            <Input id="school-id" type="file" />
                            <Button type="submit" className="bg-blue-500 text-white">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" onClick={() => setStep('choice')}>
                            Back
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {step === 'team' && (
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Team Sign-Up</CardTitle>
                        <CardDescription>Fill out details for each team member</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <Input type="text" placeholder="Team Name" className="pb-2 border rounded-md" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">Member 1</h3>
                                    <Input type="text" placeholder="Name" className="pb-2 border rounded-md" />
                                    <Input type="email" placeholder="Email" className="pb-2 border rounded-md" />
                                    <Input type="password" placeholder="Password" className="pb-2 border rounded-md" />
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="pb-2 border rounded-md"
                                    />
                                    <Label htmlFor="member1-id">School ID</Label>
                                    <Input id="member1-id" type="file" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">Member 2</h3>
                                    <Input type="text" placeholder="Name" className="pb-2 border rounded-md" />
                                    <Input type="email" placeholder="Email" className="pb-2 border rounded-md" />
                                    <Input type="password" placeholder="Password" className="pb-2 border rounded-md" />
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="pb-2 border rounded-md"
                                    />
                                    <Label htmlFor="member2-id">School ID</Label>
                                    <Input id="member2-id" type="file" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setStep('choice')}>
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
