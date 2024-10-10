import { Button } from "@/components/ui/button";
import Image from "next/image";


// <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
export default function Home() {
  return (
    <main className="relative inset-0 py-36 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
     <div className="absolute h-[500px] w-[450px] -z-10 top-20 left-20 from-[#2e7f87] bg-gradient-to-r to-[#1870da] opacity-30 blur-[80px]"></div>
      <div className="w-10/12 mx-auto flex items-center justify-center flex-col gap-5">
        <h2 className="text-6xl text-center font-bold capitalize ">
          unlocking
          <span className="bg-gradient-to-r from-[#033034] via-[#068790] to-blue-500 bg-clip-text text-transparent">
            human potential
          </span>
          with generative ai.
        </h2>
        <p className="text-gray-700">
          developing and providing open-source ai models for creative
          problem-solving and industrial use
        </p>
        <Button className="font-normal text-xl capitalize">get started</Button>
        <Image
          src={"/Screenshot.png"}
          alt="banner"
          width={700}
          height={700}
          className=""
        />
      </div>
    </main>
  );
}
