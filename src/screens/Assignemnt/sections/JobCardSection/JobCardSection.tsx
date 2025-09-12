import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const JobCardSection = (): JSX.Element => {
  const jobCards = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Company A",
      logoSrc: "/image-77-2.png",
      logoStyle: "object-cover",
      logoContainer:
        "border border-solid border-white shadow-[0px_0px_10.25px_#94949440] bg-[linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)]",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      timeAgo: "24h Ago",
    },
    {
      id: 2,
      title: "Node Js Developer",
      company: "Company B",
      logoSrc: "/image-79.png",
      logoStyle: "",
      logoContainer:
        "bg-[linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)]",
      logoWrapper: "bg-white rounded-[102.5px] overflow-hidden",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      timeAgo: "24h Ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Company C",
      logoSrc: "/image-78.png",
      logoStyle: "",
      logoContainer:
        "border border-solid border-white shadow-[0px_0px_10.25px_#94949440] bg-[linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)]",
      logoWrapper: "bg-[#f7881f] rounded-[93.33px] overflow-hidden",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      timeAgo: "24h Ago",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Company D",
      logoSrc: "/image-77-2.png",
      logoStyle: "object-cover",
      logoContainer:
        "border border-solid border-white shadow-[0px_0px_10.25px_#94949440] bg-[linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)]",
      experience: "1-3 yr Exp",
      location: "Onsite",
      salary: "12LPA",
      description:
        "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
      timeAgo: "24h Ago",
    },
  ];

  return (
    <section className="flex items-center gap-4 w-full">
      {jobCards.map((job) => (
        <Card
          key={job.id}
          className="relative w-[316px] h-[360px] bg-white rounded-xl overflow-hidden shadow-[0px_0px_14px_#d3d3d326]"
        >
          <CardContent className="p-0 h-full">
            <div
              className={`absolute w-[83px] h-[82px] top-4 left-4 rounded-[13.18px] overflow-hidden ${job.logoContainer}`}
            >
              {job.id === 2 ? (
                <div className="relative w-[66px] h-[66px] top-2 left-[9px] bg-white rounded-[102.5px] overflow-hidden">
                  <img
                    className="absolute w-[45px] h-[45px] top-3.5 left-2.5"
                    alt="Company Logo"
                    src={job.logoSrc}
                  />
                </div>
              ) : job.id === 3 ? (
                <div className="relative w-[60px] h-[60px] top-[11px] left-3 bg-[#f7881f] rounded-[93.33px] overflow-hidden">
                  <img
                    className="absolute w-[51px] h-[51px] top-0.5 left-0.5"
                    alt="Company Logo"
                    src={job.logoSrc}
                  />
                </div>
              ) : (
                <img
                  className={`absolute w-[66px] h-[66px] top-2 left-[9px] ${job.logoStyle}`}
                  alt="Company Logo"
                  src={job.logoSrc}
                />
              )}
            </div>

            <h3 className="absolute top-[116px] left-4 [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]">
              {job.title}
            </h3>

            <div className="inline-flex items-center gap-4 absolute top-40 left-4">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Experience Icon"
                  src="/frame-48102935.svg"
                />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base text-center tracking-[0] leading-[normal]">
                  {job.experience}
                </span>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Location Icon"
                  src="/frame-48102937.svg"
                />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base text-center tracking-[0] leading-[normal]">
                  {job.location}
                </span>
              </div>

              <div className="inline-flex items-end gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Salary Icon"
                  src="/frame-48102939.svg"
                />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base text-center tracking-[0] leading-[normal]">
                  {job.salary}
                </span>
              </div>
            </div>

            <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[7px] absolute top-4 left-[222px] bg-[#afd8ff] rounded-[10px] border-0 hover:bg-[#afd8ff]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[normal]">
                {job.timeAgo}
              </span>
            </Badge>

            <Button className="flex w-[284px] items-center justify-center gap-2.5 px-2.5 py-3 absolute top-[298px] left-4 bg-[#00aaff] rounded-[10px] border border-solid shadow-[0px_0px_14px_#5c5c5c26] hover:bg-[#0099ee] h-auto">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-[normal]">
                Apply Now
              </span>
            </Button>

            <p className="absolute w-[300px] top-[201px] left-[9px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#555555] text-sm tracking-[0] leading-[normal] whitespace-pre-line">
              {job.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
