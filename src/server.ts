'use server';
import { round } from '@/types';
import { pb } from './pocketbase';

export async function signUpSolo(formData: FormData) {
    const teamName = formData.get('teamName') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Validate passwords
    if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    try {
        // Create the solo account in the Accounts collection
        const soloAccount = await pb.collection('Accounts').create({
            TeamName: teamName,
            UserName: name,
            email,
            password,
            passwordConfirm: confirmPassword,
            PointGraph: [], // Initialize PointGraph as an empty array
            emailVisibility: true
        });

        console.log("Solo account created:", soloAccount);

        // Create a team entry in the Teams collection with only one member
        const teamData = {
            TeamName: teamName,
            Division: "None", // Default division
            Score: 0, // Default score
            TeamMember: soloAccount.UserName, // Store the solo account ID as a string
            created: new Date().toISOString(),
            updated: new Date().toISOString()
        };

        const teamRecord = await pb.collection('Teams').create(teamData);
        console.log('Solo team created successfully:', teamRecord);
    } catch (error) {
        console.error('Error during solo sign-up:', error);
        throw error;
    }
}

export async function signUpTeam(formData: FormData) {
    const teamName = formData.get('teamName') as string;
    const member1 = {
        name: formData.get('member1Name') as string,
        email: formData.get('member1Email') as string,
        password: formData.get('member1Password') as string,
        confirmPassword: formData.get('member1ConfirmPassword') as string
    };
    const member2 = {
        name: formData.get('member2Name') as string,
        email: formData.get('member2Email') as string,
        password: formData.get('member2Password') as string,
        confirmPassword: formData.get('member2ConfirmPassword') as string
    };

    // Validate passwords
    if (member1.password !== member1.confirmPassword || member2.password !== member2.confirmPassword) {
        throw new Error("Passwords do not match");
    }

    try {
        // Create individual accounts for each team member
        const member1Account = await pb.collection('Accounts').create({
            TeamName: teamName,
            UserName: member1.name,
            email: member1.email,
            password: member1.password,
            passwordConfirm: member1.confirmPassword,
            PointGraph: [], // Initialize PointGraph as an empty array
            emailVisibility: true
        });

        const member2Account = await pb.collection('Accounts').create({
            TeamName: teamName,
            UserName: member2.name,
            email: member2.email,
            password: member2.password,
            passwordConfirm: member2.confirmPassword,
            PointGraph: [], // Initialize PointGraph as an empty array
            emailVisibility: true
        });

        console.log("Member 1 account created:", member1Account);
        console.log("Member 2 account created:", member2Account);

        // Create the team entry in the Teams collection
        const teamData = {
            TeamName: teamName,
            Division: "None", // Default division
            Score: 0, // Default score
            TeamMember: `${member1Account.UserName},${member2Account.UserName}`, // Store member account IDs as a comma-separated string
            created: new Date().toISOString(),
            updated: new Date().toISOString()
        };

        const teamRecord = await pb.collection('Teams').create(teamData);
        console.log('Team created successfully:', teamRecord);
    } catch (error) {
        console.error('Error during team sign-up:', error);
        throw error;
    }
}
export async function loginUser(email: string, password: string) {
    try {
      // Authenticate the user with PocketBase
      const authData = await pb.collection('Accounts').authWithPassword(email, password);
  
      // If successful, return the authenticated user data
      return {
        success: true,
        user: authData.record, // Contains user details
        token: authData.token, // Authentication token
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: "Invalid email or password. Please try again.",
      };
    }
  } 
let currentRound: round = {
    roundName: "No round ATM",
    roundEnd: new Date(),
    roundType: "none",
    roundDivision: "all"
};

let endRoundState: round = {
    roundName: "No round ATM",
    roundEnd: new Date(),
    roundType: "none",
    roundDivision: "all"
};

// Push round
export async function pushRound(Cround: round) {
    currentRound = Cround;
    return currentRound;
}

// End round
export async function endRound() {
    currentRound.roundType = "none";
    currentRound.roundEnd = new Date();
    currentRound.roundName = "No round ATM";
    return currentRound;
}

// Get round
export async function RoundInfo() {
    try {
        if (hasDatePassed(currentRound.roundEnd)) {
            console.log("Round has ended. Returning end round state.", currentRound);
            return endRoundState;
        }
        console.log("Round is ongoing. Returning current round info.", currentRound);
        return currentRound;
    } catch (error) {
        console.error("Error fetching round info:", error);
        throw new Error("Failed to fetch round info");
    }
}

// Check if a date has passed
function hasDatePassed(date: Date): boolean {
    const now = new Date();
    return date < now;
}