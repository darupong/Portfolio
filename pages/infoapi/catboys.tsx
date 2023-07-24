/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Spin } from "antd";
import Error from "next/error";

interface ICatboy {
  url: string;
  artist: string;
}

const catboys = () => {
  const api = "https://api.catboys.com/img";
  const [info, setInfo] = useState<ICatboy | null>(null);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      setInfo(response.data);
    } catch (err) {
      console.error("err =>", Error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //console.log("data =>", info);

  return (
    <div className="container mx-auto py-[100px]">
      <h1 className="text-[60px] font-bold text-center pb-[50px] dark:text-white text-gray-800">
        Random Catboys
      </h1>
      <div>
        {info ? (
          <div className="flex flex-col justify-center">
            <div className="flex justify-center pb-6">
              <img src={info.url} alt="" className="w-96" />
            </div>
            <div className="flex justify-center">
              <div className="justify-center pb-4 text-black dark:text-white">
                Artist : {info.artist}
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-accent" onClick={fetchData}>
                Random it!
              </button>
            </div>
          </div>
        ) : (
          <div className=" flex justify-center items-center">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
};

export default catboys;
