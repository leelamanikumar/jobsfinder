import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { apiPost } from "../../../../lib/api";

interface CreateJobSectionProps {
  onBack: () => void;
}

export const CreateJobSection = ({ onBack }: CreateJobSectionProps): JSX.Element => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    jobDescription: "",
    applicationDeadline: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.jobTitle || !formData.companyName || !formData.location || !formData.jobType || !formData.jobDescription) {
      alert("Please fill all required fields");
      return;
    }
    const payload = {
      title: formData.jobTitle,
      company: formData.companyName,
      location: formData.location,
      description: formData.jobDescription,
      salaryMin: Number(formData.salaryMin) || undefined,
      salaryMax: Number(formData.salaryMax) || undefined,
      jobType: formData.jobType,
      applicationDeadline: formData.applicationDeadline,
    } as const;
    try {
      await apiPost("/api/jobs", payload);
      onBack();
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : "Failed to create job";
      alert(message);
    }
  };

  return (
    <div className="bg-[#fbfbff] min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="w-full bg-white rounded-2xl shadow-2xl">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-2xl font-bold text-gray-900 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                  Create New Job
                </h2>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Job Title and Company Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                    Job Title *
                  </label>
                  <Input
                    placeholder="e.g. Full Stack Developer"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                    Company Name *
                  </label>
                  <Input
                    placeholder="e.g. Tech Solutions Inc."
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]"
                    required
                  />
                </div>
              </div>

              {/* Location and Job Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                    Location *
                  </label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                      <SelectItem value="surat">Surat</SelectItem>
                      <SelectItem value="lucknow">Lucknow</SelectItem>
                      <SelectItem value="kanpur">Kanpur</SelectItem>
                      <SelectItem value="nagpur">Nagpur</SelectItem>
                      <SelectItem value="indore">Indore</SelectItem>
                      <SelectItem value="bhopal">Bhopal</SelectItem>
                      <SelectItem value="visakhapatnam">Visakhapatnam</SelectItem>
                      <SelectItem value="vadodara">Vadodara</SelectItem>
                      <SelectItem value="coimbatore">Coimbatore</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                    Job Type *
                  </label>
                  <Select value={formData.jobType} onValueChange={(value) => handleInputChange("jobType", value)}>
                    <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Salary Range and Application Deadline Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                    Salary Range *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min (e.g. 8 LPA)"
                      value={formData.salaryMin}
                      onChange={(e) => handleInputChange("salaryMin", e.target.value)}
                      className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]"
                      required
                    />
                    <Input
                      placeholder="Max (e.g. 12 LPA)"
                      value={formData.salaryMax}
                      onChange={(e) => handleInputChange("salaryMax", e.target.value)}
                      className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                    Application Deadline *
                  </label>
                  <Input
                    type="date"
                    value={formData.applicationDeadline}
                    onChange={(e) => handleInputChange("applicationDeadline", e.target.value)}
                    className="h-12 border-gray-200 focus:border-blue-500 [font-family:'Satoshi_Variable-Medium',Helvetica]"
                    required
                  />
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 [font-family:'Satoshi_Variable-Bold',Helvetica]">
                  Job Description *
                </label>
                <textarea
                  placeholder="Describe the job role and what the position entails..."
                  value={formData.jobDescription}
                  onChange={(e) => handleInputChange("jobDescription", e.target.value)}
                  className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none [font-family:'Satoshi_Variable-Medium',Helvetica]"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1 h-12 border-gray-300 text-gray-700 hover:bg-gray-50 [font-family:'Satoshi_Variable-Medium',Helvetica]"
                >
                  Save Draft
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12 bg-[#00aaff] hover:bg-[#0099ee] text-white [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold"
                >
                  Publish
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};