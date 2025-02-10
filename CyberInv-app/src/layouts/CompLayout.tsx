import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import pb from '@/api/pocketbase';
import { useNavigate } from 'react-router-dom';
export default function Layout() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // // Check if the user is authenticated on component mount
    useEffect(() => {
        if (!pb.authStore.isValid) {
            // If the user is not authenticated, redirect to the login page
            // navigate('/login');
        }
    }, [navigate]); // Runs only once when the component mounts

    // Update isMobile state on resize



        return (
            <ThemeProvider>
                <div className="h-screen flex flex-col inter-400 w-full">
                    <Navbar />

                    <div className="w-full h-fit absolute justify-end">
                    </div>
                    <Outlet />
                </div>
            </ThemeProvider>
        );

}
