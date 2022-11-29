import React from 'react'
import Image from "next/image";

import logo from "../public/img/myimg.png"

const AboutMe = () => {
    return (
        <div>
            <div className={`md:py-[100px] marker:min-h-[564px] md:min-h-screen`}>
                <div className={`flex flex-col items-center justify-center`}>
                    <p className=" font-bold text-[80px]">About Me</p>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4 pt-[50px]">
                    <div className="row-span-3 flex items-center justify-end">
                        <Image src={logo} className="h-[300px] w-[300px]" alt="Flowbite Logo" />
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <p className=" font-bold text-[20px]"> I'm Darupong Chouypu <br /> A Web Developer and AR Filter. </p>
                    </div>
                    <div className="row-span-2 col-span-2 flex items-center justify-center">03</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe