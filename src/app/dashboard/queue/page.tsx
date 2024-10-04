import Image from "next/image";
export default function Page() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="bg-neutral-900 rounded-2xl w-2/3 h-1/3 md:p-5">

      <div className="grid grid-cols-1 gap-4 place-items-center ">
        <Image src="/favicon.ico" width={300} height={300} alt="ico" />
        <div className="text-3xl font-bold text-center max-w-lg">
          You have been placed in a queue, once your application has been
          approved, you may form a team or remain solo.
        </div>
      </div>
      </div>
    </main>
  );
}
