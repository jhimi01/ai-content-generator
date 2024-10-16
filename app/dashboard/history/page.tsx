import React from "react";
import { desc, eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, Copy } from "lucide-react";
import Link from "next/link";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null; // Allow null
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  // Fetch history data from db
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

  // Function to get template name and icon from slug
  const GetTemplateData = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find(
      (item: TEMPLATE) => item.slug === slug
    );
    return {
      name: template?.name || "Unknown Template",
      icon: template?.icon || "https://via.placeholder.com/100", // Use a placeholder if icon not found
    };
  };

  return (
    <div className="m-5">
      <div className="my-10 flex justify-between pr-10">
        <div>
          <h1 className="text-3xl text-primary font-bold">History</h1>
          <p className="text-sm text-gray-600">
            Search your previously generate AI content
          </p>
        </div>
        <Link href={"/dashboard"}>
          <Button>
            <ArrowBigLeft /> back
          </Button>
        </Link>
      </div>

      <TooltipProvider>
        <Table className="py-10">
          <TableCaption className="py-14">
            A list of your recent history entries.
          </TableCaption>
          <TableHeader className="py-10">
            <TableRow className="py-10">
              <TableHead className="text-primary text-xl">Template</TableHead>
              <TableHead className="text-primary text-xl">
                AI Response
              </TableHead>
              <TableHead className="text-center text-primary text-xl">
                Created At
              </TableHead>
              <TableHead className="text- text-primary text-xl">
                copy text
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {HistoryList.map((item) => {
              const { name, icon } = GetTemplateData(item.templateSlug);
              const previewText = item.aiResponse
                ? item.aiResponse.slice(0, 50)
                : "No Response"; // Display first 50 characters
              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Image src={icon} alt={name} height={25} width={25} />
                      <span>{name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="">
                    <Tooltip>
                      <TooltipTrigger>
                        <span>{previewText}</span>
                        {item.aiResponse &&
                          item.aiResponse.length > 50 &&
                          "..."}
                      </TooltipTrigger>
                      <TooltipContent className="max-w-4xl p-3 leading-[18px] tracking-wide">
                        <p>{item.aiResponse}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="text-center">
                    {item.createdAt}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      className="flex items-center gap-1 "
                      variant={"outline"}
                    >
                      copy <Copy className="text-sm h-5 w-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TooltipProvider>
    </div>
  );
}

export default History;
