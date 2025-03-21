"use server";
import { pb } from '@/lib/pocketbase'; // Import PocketBase client

//solo signup
export async function signUpSolo(formData: FormData) {
  const teamName = formData.get('teamName') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
  }
  const teamData = {
    TeamName: teamName,
    Division: "None", // Default division
    Score: 0, // Default score
    TeamMember: name, // Store member account IDs as a comma-separated string
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    emailVisibility: true

  };

  const accountData = {
      TeamName: teamName,
      UserName: name,
      email,
      password,
      passwordConfirm: confirmPassword,
      PointGraph: [],
      emailVisibility: true
  };

  try {
      const record = await pb.collection('Accounts').create(accountData);
      console.log('Solo account created:', record);
      const TeamRecord = await pb.collection('Teams').create(teamData);
      console.log('Solo team has been created:', TeamRecord);


  } catch (error) {
      console.error('Error creating solo account:', error);
      throw error;
  }
}
export async function signUpTeam(formData: FormData) {
  const teamName = formData.get('teamName') as string;
  const member1 = {
    name: formData.get('member1Name') as string,
    email: formData.get('member1Email') as string,
    password: formData.get('member1Password') as string,
    confirmPassword: formData.get('member1ConfirmPassword') as string,
  };
  const member2 = {
    name: formData.get('member2Name') as string,
    email: formData.get('member2Email') as string,
    password: formData.get('member2Password') as string,
    confirmPassword: formData.get('member2ConfirmPassword') as string,
  };

  // Validate passwords
  if (member1.password !== member1.confirmPassword || member2.password !== member2.confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  let member1Account = null;
  let member2Account = null;

  try {
    // Create the first account
    member1Account = await pb.collection('Accounts').create({
      TeamName: teamName,
      UserName: member1.name,
      email: member1.email,
      password: member1.password,
      passwordConfirm: member1.confirmPassword,
      PointGraph: [], // Initialize PointGraph as an empty array
      emailVisibility: true,
    });
    member2Account = await pb.collection('Accounts').create({
      TeamName: teamName,
      UserName: member2.name,
      email: member2.email,
      password: member2.password,
      passwordConfirm: member2.confirmPassword,
      PointGraph: [], // Initialize PointGraph as an empty array
      emailVisibility: true,
    });
    console.log("Member 1 account created:", member1Account);

    // Create the team entry in the Teams collection
    const teamData = {
      TeamName: teamName,
      Division: "None", // Default division
      Score: 0, // Default score
      TeamMember: `${member1Account.UserName},${member2Account.UserName}`,
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
    };

    const teamRecord = await pb.collection('Teams').create(teamData);
    console.log('Team has been created successfully:', teamRecord);

    return {
      success: true,
      message: "Team and accounts have been created successfully!",
    };
  } catch (error) {
    console.error("Error during team sign-up:", error);

    // Rollback: Delete the first account if the second account creation fails
    if (member1Account && !member2Account) {
      await pb.collection('Accounts').delete(member1Account.id);
      console.log("Rollback: Deleted Member 1's account due to failure.");
    }

    return {
      success: false,
      error: "Failed to create the team. Please try again.",
    };
  }
}
