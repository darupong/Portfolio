/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface ICovid {
  province: string;
  year: number;
  new_case: number;
  total_case: number;
  total_death: number;
  update_date: string;
}

const covidinfo = () => {
  const api =
    "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";
  const [info, setInfo] = useState<ICovid[]>([]);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        const responData = res.data;
        const uniqueItems = responData.filter(
          (info: any, index: number, self: any) =>
            index === self.findIndex((i: any) => i.province === info.province)
        );
        setInfo(uniqueItems);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //console.log("data =>", info);

  const columns: ColumnsType<ICovid> = [
    {
      title: "ปี",
      dataIndex: "year",
      render: (_, record) => <div>{record.year}</div>,
    },
    {
      title: "จังหวัด",
      dataIndex: "Province",
      render: (_, record) => <div>{record.province}</div>,
    },
    {
      title: "ผู้ป่วยล่าสุด",
      dataIndex: "new_case",
      render: (_, record) => <div>{record.new_case}</div>,
    },
    {
      title: "ผู้ป่วยทั้งหมด",
      dataIndex: "total_case",
      render: (_, record) => <div>{record.total_case}</div>,
    },
    {
      title: "เสียชีวิตทั้งหมด",
      dataIndex: "total_death",
      render: (_, record) => <div>{record.total_death}</div>,
    },
    {
      title: "อัพเดทล่าสุด",
      dataIndex: "update_date",
      render: (_, record) => <div>{record.update_date}</div>,
    },
  ];

  return (
    <div className="container mx-auto py-[100px]">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        Thailand Covid Information
      </h1>
      <Table columns={columns} dataSource={info} />
    </div>
  );
};

export default covidinfo;
