// import React, { ReactNode, useEffect, useState } from 'react';
// import { ModeToggle } from '@/components/mode-toggle';
// import { Link, useLocation } from 'react-router-dom';
// import {
//     UserIcon,
//     CurrencyDollarIcon,
//     ChartBarIcon,
//     PuzzlePieceIcon,
//     ShieldExclamationIcon,
//     ServerStackIcon,
// } from '@heroicons/react/24/outline';
// import { Button } from './ui/button';
// import Countdown, { CountdownRendererFn } from 'react-countdown';
// import { IoExit } from 'react-icons/io5';
// import pb from '@/api/pocketbase'; // Assuming pb is the initialized PocketBase instance
// import { userCardData } from '@/api/player';
// // Logout handler
// const handleLogout = () => {
//     pb.authStore.clear(); // Clear PocketBase auth store
//     window.location.href = '/login'; // Redirect to login page
// };

// // Completionist Component for Countdown End
// const Completionist: React.FC = () => <span className="line-clamp-1">No round atm</span>;

// // Helper to format time in 00:00:00 format
// const formatTime = (time: number): string => String(time).padStart(2, '0');

// // Renderer callback with condition for 00:00:00 format
// const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
//     if (completed) {
//         return <Completionist />;
//     } else {
//         return (
//             <span>
//                 {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
//             </span>
//         );
//     }
// };

// interface NavItemProps {
//     to: string;
//     children: ReactNode;
// }

// const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
//     const location = useLocation();

//     return (
//         <Button variant={location.pathname === to ? 'outline' : 'ghost'}>
//             <Link to={to} className="inline-flex gap-1">
//                 {children}
//             </Link>
//         </Button>
//     );
// };

// export default function Navbar() {
//     const [username, setUsername] = useState<string | null>(null);
//     const [roundActive, setRoundActive] = useState<boolean>(false);
//     const [timer, setTimer] = useState<number>(0); // Store remaining time

//     // TODO: Replace
//     // useEffect(() => {
//     //     // Get username from PocketBase authStore model if the user is authenticated
//     //     const user = pb.authStore.model;

//     //     if (user) {
//     //         setUsername(user.name); // Set username from PocketBase's auth store model
//     //     }
//     // }, []);

//     useEffect(() => {
//         const fetchRoundInfo = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/current-round', {
//                     method: 'GET',
//                     headers: {
//                         Authorization: `Bearer ${pb.authStore.token}`,
//                         'Content-Type': 'application/json',
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch round information');
//                 }

//                 const data = await response.json();
//                 if (data.round_length) {
//                     const finishTime = new Date(data.round_length.finish).getTime();
//                     const currentTime = Date.now();
//                     const timeLeft = finishTime - currentTime;

//                     if (timeLeft > 0) {
//                         setRoundActive(true);
//                         setTimer(timeLeft); // Set the timer
//                     } else {
//                         setRoundActive(false);
//                     }
//                 } else {
//                     setRoundActive(false);
//                 }
//             } catch (error) {
//                 console.error('Error fetching round info:', error);
//             }
//         };

//         // Fetch round info initially and set interval for periodic updates
//         fetchRoundInfo(); // Initial fetch
//         const intervalId = setInterval(fetchRoundInfo, 5000); // Fetch round info every 5 seconds

//         return () => clearInterval(intervalId); // Cleanup
//     }, []);

//     return (
//         <div className="flex flex-row w-full justify-center items-center p-3">
//             {/* Ensures centering */}
//             <div className="flex flex-row gap-3 max-w-screen-xl w-full justify-center">
//                 {/* Centers the inner content */}
//                 {/* User Info */}
//                 <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 px-3 shadow">
//                     <div className="flex flex-row">
//                         <UserIcon className="size-6" />
//                         {userCardData.username || 'Guest'}
//                     </div>
//                     <div className="flex flex-row">
//                         <CurrencyDollarIcon className="size-6" />
//                         {userCardData.totalPoints}
//                     </div>
//                 </div>
//                 {/* Countdown Timer */}
//                 <div className="flex flex-row items-center border rounded-md shadow min-w-36">
//                     <div className="w-full text-center font-bold text-lg">
//                         {roundActive ? (
//                             <Countdown
//                                 date={Date.now() + timer} // Use the timer state
//                                 renderer={renderer} // Countdown renderer
//                             />
//                         ) : (
//                             <span>No active round</span>
//                         )}
//                     </div>
//                 </div>
//                 {/* Navigation Links */}
//                 <div className="flex flex-row justify-between border rounded-md items-center gap-1.5 p-1.5 shadow">
//                     <div className="flex flex-row gap-1.5">
//                         <NavItem to="/Dashboard">
//                             <ChartBarIcon className="size-6" />
//                             Dashboard
//                         </NavItem>
//                         <NavItem to="/puzzle">
//                             <PuzzlePieceIcon className="size-6" />
//                             Puzzle Round
//                         </NavItem>
//                         <NavItem to="#">
//                             <ShieldExclamationIcon className="size-6" />
//                             Battle Round
//                         </NavItem>
//                         <NavItem to="/scenario">
//                             <ServerStackIcon className="size-6" />
//                             Scenario Round
//                         </NavItem>
//                     </div>
//                 </div>
//                 {/* Mode Toggle */}
//                 <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
//                     <ModeToggle />
//                 </div>
//                 {/* Logout Button */}
//                 <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
//                     <Button asChild variant="destructive" onClick={handleLogout}>
//                         <IoExit className="w-6 h-6" />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }
