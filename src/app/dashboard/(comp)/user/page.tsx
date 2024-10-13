import AuthCheck from "./AuthCheck";  // Assuming AuthCheck is already in place
import UserInfo from "./UserInfo";      // Import the client-side component

export default function Page() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <AuthCheck />
      <UserInfo />  {/* Render the user information */}
    </main>
  );
}
