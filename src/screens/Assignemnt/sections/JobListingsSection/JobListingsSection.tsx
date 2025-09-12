import React, { useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { apiGet } from "../../../../lib/api";

export const JobListingsSection = (): JSX.Element => {
  const [jobs, setJobs] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiGet<Array<any>>("/api/jobs");
        setJobs(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <section className="flex items-center gap-4 w-full">
      {jobs.map((job) => (
        <Card
          key={job._id}
          className="w-[316px] h-[360px] bg-white rounded-xl overflow-hidden shadow-[0px_0px_14px_#d3d3d326] relative"
        >
          <CardContent className="p-0 h-full relative">
            <div
              className={`absolute w-[83px] h-[82px] top-4 left-4 rounded-[13.18px] overflow-hidden border border-solid border-white shadow-[0px_0px_10.25px_#94949440] bg-[linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)]`}
            >
              <img
                className="absolute w-[66px] h-[66px] top-2 left-[9px] object-cover"
                alt="Company logo"
                src="/image-77-2.png"
              />
            </div>

            <h3 className="absolute top-[116px] left-4 [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]">{job.title}</h3>

            <div className="inline-flex items-center gap-4 absolute top-40 left-4">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Experience icon"
                  src="/frame-48102935.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base text-center tracking-[0] leading-[normal]">
                  {job.company}
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Location icon"
                  src="/frame-48102937.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base text-center tracking-[0] leading-[normal]">
                  {job.location}
                </div>
              </div>

              <div className="inline-flex items-end gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Salary icon"
                  src="/frame-48102939.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base text-center tracking-[0] leading-[normal]">
                  {job.salaryMax ? `${job.salaryMin || ''}-${job.salaryMax}` : job.salaryMin || ''}
                </div>
              </div>
            </div>

            <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[7px] absolute top-4 left-[222px] bg-[#afd8ff] rounded-[10px] border-0 text-black hover:bg-[#afd8ff]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[normal]">
                {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : ''}
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
