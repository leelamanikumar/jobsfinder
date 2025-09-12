import React from "react";
import { Button } from "../../../../components/ui/button";

interface NavigationBarSectionProps {
  onCreateJobClick: () => void;
}

export const NavigationBarSection = ({ onCreateJobClick }: NavigationBarSectionProps): JSX.Element => {
  const navigationItems = [
    { label: "Home", active: true },
    { label: "Find Jobs", active: false },
    { label: "Find Talents", active: false },
    { label: "About us", active: false },
    { label: "Testimonials", active: false },
  ];

  return (
    <nav className="w-full max-w-[890px] h-20 bg-white rounded-[122px] border border-solid border-[#fcfcfc] shadow-[0px_0px_20px_#7f7f7f26] mx-auto">
      <div className="flex items-center justify-between h-full px-[26px]">
        <img className="w-11 h-[45px]" alt="Frame" src="/frame-54.svg" />

        <div className="flex items-center gap-2">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto px-6 py-2 rounded-[10px] ${
                item.active
                  ? "bg-white text-dark-black"
                  : "bg-transparent text-dark-black hover:bg-white"
              }`}
            >
              <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-base tracking-[0] leading-[normal]">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <Button 
          onClick={onCreateJobClick}
          className="h-auto px-6 py-2 rounded-[30px] bg-[linear-gradient(180deg,rgba(161,40,255,1)_0%,rgba(97,0,173,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(161,40,255,0.9)_0%,rgba(97,0,173,0.9)_100%)]"
        >
          <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-[normal]">
            Create Jobs
          </span>
        </Button>
      </div>
    </nav>
  );
};
