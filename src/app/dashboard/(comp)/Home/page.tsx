// Page.js
import AuthCheck from "./AuthCheck";

export default function Page() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <AuthCheck />
      <div className="w-4/5 h-4/5 bg-neutral-950 shadow-2xl rounded-2xl flex items-center justify-center">
        Hello
      </div>
    </main>
  );
}
