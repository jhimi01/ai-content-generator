import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden inset-0 py-20 md:py-36  h-full z-10  w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute h-[100px] md:h-[500px] -z-10 w-[100px] md:w-[500px] rounded-full -top-16 left-0 from-[#269b78d2] bg-gradient-to-r to-[#269b78b6] opacity-30 blur-[80px]"></div>
      <div className="fixed h-[300px] md:h-[500px] w-[300px] md:w-[500px] -z-10 rounded-full -bottom-10 -right-20 from-[#269b78df] bg-gradient-to-r to-[#269b78b1] opacity-30 blur-[80px]"></div>
      <div className="md:w-10/12 w-11/12 mx-auto flex items-center justify-center flex-col gap-2 md:gap-5 text-center">
        <h2 className="text-4xl md:text-6xl text-center font-bold capitalize">
          unlocking
          <span className="bg-gradient-to-r mx-2 from-[#033034] via-[#068790] to-blue-500 bg-clip-text text-transparent">
            human potential
          </span>
          with generative ai.
        </h2>
        <p className="text-gray-700">
          developing and providing open-source ai models for creative
          problem-solving and industrial use
        </p>
        <Link href={"/dashboard"}>
          <Button className="font-normal text-xl capitalize">
            get started
          </Button>
        </Link>
        <Image
          src={"/aibanner.png"}
          alt="banner"
          width={300}
          height={300}
          className=""
        />
      </div>
    </main>
  );
}
