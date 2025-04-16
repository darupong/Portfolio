import React from "react";
import Image from "next/image";
import resumeimg from "../public/img/Resume.webp";
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

const resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/img/Resume.webp';
    link.download = 'Resume.webp';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex flex-col justify-center items-center gap-6">
        <Image src={resumeimg} alt="resume" className="w-[600px] h-auto" />
        <Button type="primary" size="large" shape="round" icon={<DownloadOutlined />}
          onClick={handleDownload}
          className="bg-[#36D399] hover:bg-[#36D399] text-white border-none"
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default resume;