import React from 'react'
import css from '../styles/HeroSection.module.css'

const HeroSection = () => {
    return (
        <div className={`${css.bgTitle} `}>
            <div className={`md:py-[100px] marker:min-h-[564px] md:min-h-screen`}>
                <div className={` pt-[200px] flex flex-col items-center justify-center`}>
                    <p className=" font-bold text-[100px] text-white">Hi Everyone!</p>
                    <p className=" font-bold text-[50px] text-gray-500 dark:text-white">My name is <span className={` text-white dark:text-gray-500`}>Darupong Chouypu</span></p>
                    <p className={`${css.animated} font-bold text-[50px] pt-[10px]`}>Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection