"use client";
import { pushRound } from "@/server";
import { round } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { EndRound } from "./action";
const roundSchema = z.object({
  roundName: z.string().min(1, "Round name is required."),
  roundType: z.enum(["battle", "puzzle", "scenario"], {
    errorMap: () => ({ message: "Select a valid round type." }),
  }),
  roundEnd: z.number().min(1).max(120, "Length must be between 1 and 120 minutes."),
  roundDivision: z.enum(["gold", "platinum", "all"], {
    errorMap: () => ({ message: "Select a division." }),
  }),
});


const pointsSchema = z.object({
  player: z.string().min(1, "Player is required."),
  operation: z.enum(["add", "subtract"], {
    errorMap: () => ({ message: "Select an operation." }),
  }),
  points: z.number().min(1, "Points must be greater than 0."),
});

export default function RoundController() {
  type RoundFormValues = z.infer<typeof roundSchema>;

  const roundForm = useForm<RoundFormValues>({
    resolver: zodResolver(roundSchema),
    defaultValues: {
      roundName: "",
      roundType: "battle",
      roundEnd: 30,
      roundDivision: "all",
    },
  });
  

  const pointsForm = useForm({
    resolver: zodResolver(pointsSchema),
    defaultValues: {
      player: "",
      operation: "add",
      points: 1,
    },
  });

  async function handleStartRound(values: z.infer<typeof roundSchema>) {
    try {
      // Convert roundEnd to a Date after validation
      const roundEnd = new Date();
      roundEnd.setMinutes(roundEnd.getMinutes() + values.roundEnd);
  
      // Prepare the round object
      const roundData:round = {
        ...values,
        roundEnd,
      };
  
      // Call the pushRound function with the updated data
      await pushRound(roundData);
      console.log('Round started successfully:', roundData);
    } catch (error) {
      console.error('Error starting round:', error);
    }
  }
  
  
  
  
  function handlePointsChange(values:number) {
    console.log("Points Change:", values);
  }

  async function handleStopRounds() {
    try {
      await EndRound();
      console.log('All rounds stopped successfully');
    } catch (error) {
      console.error('Error stopping rounds:', error);
    }
  }
  function splitIntoDivs() {
    console.log("players have been separated.");
  }


  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full text-center font-bold text-2xl underline">Round Creation Settings</div>
    
      <div className="w-1/2 bg-card p-6 shadow-md rounded-md">
        <Form {...roundForm}>
        <form onSubmit={roundForm.handleSubmit(handleStartRound)} className="space-y-4">
        {/* Round Name */}
            <FormField
              control={roundForm.control}
              name="roundName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Round Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the round name" {...field} />
                  </FormControl>
                  <FormDescription>Name of the round (e.g., Battle Royale).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Round Type */}
            <FormField
              control={roundForm.control}
              name="roundType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Round Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select round type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="battle">Battle</SelectItem>
                        <SelectItem value="puzzle">Puzzle</SelectItem>
                        <SelectItem value="scenario">Scenario</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Type of the round (e.g., Battle, Puzzle).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Round Length */}
            <FormField
              control={roundForm.control}
              name="roundEnd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Round Length (minutes)</FormLabel>
                  <FormControl>
                    <Slider
                      defaultValue={[field.value]}
                      min={1}
                      max={120}
                      step={1}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <div>{field.value} minutes</div>
                  <FormDescription>Set the round duration (up to 120 minutes).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Division */}
            <FormField
              control={roundForm.control}
              name="roundDivision"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select division" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="platinum">Platinum</SelectItem>
                        <SelectItem value="all">All</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Assign this round to a division (Gold or Platinum).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit">Start Round</Button>
          </form>
        </Form>

        {/* Stop Rounds Button */}
        <Button variant="destructive" onClick={handleStopRounds} className="mt-4">
          Stop All Rounds
        </Button>
        <Button variant="outline" onClick={splitIntoDivs} className="mt-4 bg-lime-700">
         Split into divs
        </Button>
      </div>

     
    </main>
  );
}
// {/* <Separator className="my-8 w-2/4" orientation="horizontal" />

// {/* Points Adjustment */}
// <div className="w-1/2 bg-card p-6 shadow-md rounded-md">
//   <div className="text-center font-bold text-xl mb-4">Adjust Player Points</div>
//   <Form {...pointsForm}>
//     <form onSubmit={pointsForm.handleSubmit(handlePointsChange)} className="space-y-4">
//       {/* Player Selection */}
//       <FormField
//         control={pointsForm.control}
//         name="player"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Player</FormLabel>
//             <FormControl>
//               <Input placeholder="Search player" {...field} />
//             </FormControl>
//             <FormDescription>Select the player to adjust points.</FormDescription>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Operation */}
//       <FormField
//         control={pointsForm.control}
//         name="operation"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Operation</FormLabel>
//             <FormControl>
//               <Select
//                 onValueChange={field.onChange}
//                 defaultValue={field.value}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select operation" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="add">Add</SelectItem>
//                   <SelectItem value="subtract">Subtract</SelectItem>
//                 </SelectContent>
//               </Select>
//             </FormControl>
//             <FormDescription>Add or subtract points.</FormDescription>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Points */}
//       <FormField
//         control={pointsForm.control}
//         name="points"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Points</FormLabel>
//             <FormControl>
//               <Input type="number" min="1" placeholder="Enter points" {...field} />
//             </FormControl>
//             <FormDescription>Number of points to add or subtract.</FormDescription>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Submit Button */}
//       <Button type="submit">Submit</Button>
//     </form>
//   </Form>
// </div> */}