import Image from "next/image";
export default function page() {
  return (
    <main className="w-full h-full flex-col justify-center place-items-center">
      <Image src="/favicon.ico" width={300} height={300} alt="ico" />
      <div className="text-3xl font-bold">
        You have been placed in a queue, once your application has been aproved,
        you may form a team or remain solo.
      </div>
    </main>
  );
}
