import { BriefcaseIcon, MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const JobFilterSection = (): JSX.Element => {
  return (
    <div className="w-full bg-white shadow-[0px_0px_14px_#c5bfbf40]">
      {/* Filter Section */}
      <div className="flex items-center justify-between px-8 py-6">
        {/* SearchIcon Input */}
        <div className="flex items-center space-x-3 flex-1 max-w-xs">
          <SearchIcon className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="SearchIcon By Job Title, Role"
            className="border-none shadow-none focus-visible:ring-0 text-gray-600 placeholder:text-gray-400 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium"
          />
        </div>

        {/* Vertical Separator */}
        <div className="w-px h-12 bg-gray-200 mx-8"></div>

        {/* Location Select */}
        <div className="flex items-center space-x-3 flex-1 max-w-xs">
          <MapPinIcon className="w-5 h-5 text-gray-400" />
          <Select>
            <SelectTrigger className="border-none shadow-none focus:ring-0 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-gray-600">
              <SelectValue placeholder="Preferred Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vertical Separator */}
        <div className="w-px h-12 bg-gray-200 mx-8"></div>

        {/* Job Type Select */}
        <div className="flex items-center space-x-3 flex-1 max-w-xs">
          <BriefcaseIcon className="w-5 h-5 text-gray-400" />
          <Select>
            <SelectTrigger className="border-none shadow-none focus:ring-0 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-gray-600">
              <SelectValue placeholder="Job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full Time</SelectItem>
              <SelectItem value="part-time">Part Time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vertical Separator */}
        <div className="w-px h-12 bg-gray-200 mx-8"></div>

        {/* Salary Range */}
        <div className="flex flex-col space-y-3 min-w-[280px]">
          <div className="flex items-center justify-between">
            <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-[#222222] text-base">
              Salary Per Month
            </span>
            <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-[#222222] text-base">
              ₹50k - ₹80k
            </span>
          </div>

          {/* Custom Range Slider */}
          <div className="relative">
            <div className="w-full h-0.5 bg-gray-300 rounded"></div>
            <div className="absolute w-[170px] h-0.5 bg-black rounded left-3.5 top-0"></div>

            {/* Range handles */}
            <div className="absolute w-[15px] h-[15px] bg-white rounded-full border-[5px] border-black -top-1.5 left-0"></div>
            <div className="absolute w-[15px] h-[15px] bg-white rounded-full border-[5px] border-black -top-1.5 left-[170px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
