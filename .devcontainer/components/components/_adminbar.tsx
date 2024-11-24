// import React, { ReactNode, useEffect, useState } from 'react';

// import {
//     UserIcon,
//     Squares2X2Icon,
//     ClockIcon,
//     PuzzlePieceIcon,
//     ShieldExclamationIcon,
//     ServerStackIcon,
// } from '@heroicons/react/24/outline';
// import { Button } from './ui/button';
// import { IoExit } from 'react-icons/io5';

// // Logout handler
// // const handleLogout = () => {
// //     pb.authStore.clear(); // Clear PocketBase auth store
// //     window.location.href = '/login'; // Redirect to login page
// // };
// // const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
// //     const location = useLocation();

// //     return (
// //         <Button variant={location.pathname === to ? 'outline' : 'ghost'}>
// //             <Link to={to} className="inline-flex gap-1">
// //                 {children}
// //             </Link>
// //         </Button>
// //     );
// // };

// export default function Navbar() {
//     const [username, setUsername] = useState<string | null>(null);
//     const [roundActive, setRoundActive] = useState<boolean>(false);
//     const [timer, setTimer] = useState<number>(0); // Store remaining time

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
//             {' '}
//             {/* Ensures centering */}
//             <div className="flex flex-row gap-3 max-w-screen-xl w-full justify-center">
//                 {' '}
//                 {/* Centers the inner content */}
//                 {/* Mode Toggle */}
//                 <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
//                     <ModeToggle />
//                 </div>
//                 {/* Navigation Links */}
//                 <div className="flex flex-row justify-between border rounded-md items-center gap-1.5 p-1.5 shadow">
//                     <div className="flex flex-row gap-1.5">
//                         <NavItem to="/Admin">
//                             <Squares2X2Icon className="size-6" />
//                             Dashboard
//                         </NavItem>
//                         <NavItem to="/puzzle">
//                             <ClockIcon className="size-6" />
//                             Round Controller
//                         </NavItem>
//                     </div>
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
