import React from "react";
import { useState } from "react";
import { CreateJobSection } from "./sections/CreateJobSection/CreateJobSection";
import { JobCardSection } from "./sections/JobCardSection/JobCardSection";
import { JobFilterSection } from "./sections/JobFilterSection/JobFilterSection";
import { JobListingsSection } from "./sections/JobListingsSection/JobListingsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export const Assignemnt = (): JSX.Element => {
  const [currentView, setCurrentView] = useState<'home' | 'create-job'>('home');

  const handleCreateJobClick = () => {
    setCurrentView('create-job');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  if (currentView === 'create-job') {
    return <CreateJobSection onBack={handleBackToHome} />;
  }

  return (
    <div className="bg-[#fbfbff] min-h-screen w-full">
      <div className="bg-[#fbfbff] max-w-[1440px] mx-auto relative">
        <div className="pt-6 pb-8">
          <NavigationBarSection onCreateJobClick={handleCreateJobClick} />
        </div>
        <JobFilterSection />
        <JobCardSection />
        <JobListingsSection />
      </div>
    </div>
  );
};
