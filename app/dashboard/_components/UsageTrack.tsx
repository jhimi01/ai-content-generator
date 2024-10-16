"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { HISTORY } from "../history/page";
import { eq } from "drizzle-orm";

function UsageTrack() {
  const { user } = useUser();

  useEffect(() => {
    user && GetData();
  }, [user]);

  const GetData = async () => {
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((item) => {
      total += Number(item.aiResponse?.length);
    });
    console.log(total);
  };

  return (
    <div className="m-5">
      <div className="bg-primary left-0 rounded p-3 text-white">
        <h2 className="font-medium">Creadits</h2>
        <div className="h-2 w-full rounded-full mt-3 bg-[#3b8392e7]">
          <div className="h-2 bg-white rounded-full w-[40%]"></div>
        </div>
        <h2 className="text-xs mt-2">130/20,000 Credit Used</h2>
      </div>
      <Button
        variant={"outline"}
        className="mt-3 w-full shadow-md font-semibold text-primary"
      >
        Upgrate
      </Button>
    </div>
  );
}

export default UsageTrack;
