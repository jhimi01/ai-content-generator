import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name?: string;
  required?: boolean;
  options?: any[];
}

function TemplateListSection({ useSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (useSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(useSearchInput.toLocaleLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [useSearchInput]);

  return (
    <div className="p-5">
      {templateList.length === 0 ? (
        <div className="flex items-center justify-center"><h2 className="text-3xl text-gray-500 capitalize mt-10">
            no the found</h2></div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {templateList.map((item: TEMPLATE, index: number) => (
            <TemplateCard {...item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TemplateListSection;
