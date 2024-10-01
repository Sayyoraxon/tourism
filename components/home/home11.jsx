import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";




const Home11 = () => {
    return (
        <div className='ml-auto mr-auto mt-44 flex container1'
            style={{ maxWidth: "1457px" }}>
            <div className='flex justify-center items-center rounded-3xl home11'>
                <div className='relative div640'>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        src="./world 1.png" alt="map" />
                    <p className='prosto-font leading-10 text-center px-20 mt-12'
                        style={{ fontSize: "40px", color: "#ce6240" }}>
                        Get the best travel packages
                    </p>
                    <input className='w-full h-14 border-b mt-8 text-lg prosto-font placeholder-black'
                        style={{ borderColor: "#ce6240" }}
                        type="text" placeholder='Your name' />
                    <input className='w-full h-14 border-b mt-9 text-lg prosto-font placeholder-black'
                        style={{ borderColor: "#ce6240" }}
                        type="text" placeholder='Your name' />
                    <button className='mt-8 w-full h-14 rounded-xl flex justify-center items-center gap-2 text-white ubuntu-font leading-7 font-medium text-lg mb-14'
                        style={{ backgroundColor: "#ce6240" }}>
                        Submit
                        <FaArrowRightLong />
                    </button>
                </div>

            </div>

            <div className='div272 flex flex-col items-center justify-center px-2'>
                    <img
                        src="./logolorem.png" alt="logo" />
                    <p className='mt-16 text-base leading-6'
                        style={{ color: "#ce6240" }}>
                        Ijtimoiy tarmoqlar
                    </p>
                    <div className='mt-2 flex gap-8'>
                        <FaYoutube style={{ color: "#ce6240", fontSize: "24px" }} />
                        <FaFacebook style={{ color: "#ce6240", fontSize: "24px" }} />
                        <RiInstagramFill style={{ color: "#ce6240", fontSize: "24px" }} />
                        <FaLinkedin style={{ color: "#ce6240", fontSize: "24px" }} />
                    </div>
                    <hr className='mt-5 h-px w-full'
                        style={{ backgroundColor: "#ce6240", border: "none" }} />
                    <p className='mt-5 text-base leading-6'
                        style={{ color: "#ce6240" }}>
                        Telefon raqamlarimiz
                    </p>
                    <p className='mt-2 prosto-font leading-6 text-xl'
                    style={{color: "#ce6240"}}>
                        +998 90 168 22 72
                    </p>
                </div>
            <div>

            </div>
        </div>
    )
}

export default Home11