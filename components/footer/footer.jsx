import Link from 'next/link'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-full mt-32 py-14 container'
            style={{ backgroundColor: "#f5f5f5"}}>
            <div className='max-w-1728 ml-auto mr-auto flex flex-wrap justify-between'>
                <div style={{ maxWidth: "656px" }}>
                    <div className='flex gap-20'>
                        <div>
                            <p className='ubuntu-font text-base leading-8'
                                style={{ color: "#5d5d5f" }}>
                                Телефон
                            </p>
                            <p className='mt-1 ubuntu-font leading-9 font-medium'
                                style={{ fontSize: "32px" }}>
                                +998 90 123 45 56
                            </p>
                        </div>
                        <div>
                            <p className='ubuntu-font text-base leading-8'
                                style={{ color: "#5d5d5f" }}>
                                Электронная почта
                            </p>
                            <p className='mt-1 ubuntu-font leading-9 font-medium'
                                style={{ fontSize: "32px" }}>
                                mailinfo.com
                            </p>
                        </div>
                    </div>
                    <p className='mt-8 ubuntu-font text-base leading-8'
                        style={{ color: "#5d5d5f" }}>
                        Адрес
                    </p>
                    <p className='mt-1 ubuntu-font leading-9 font-medium'
                        style={{ fontSize: "32px" }}>
                        Toshkent viloyati, Parkent tumani, Changi QFY, Olmazor mahallasi
                    </p>
                </div>

                <div className='flex gap-6 pt-10'>
                    <div>
                        <Link className='block ubuntu-font font-medium leading-8'
                            style={{ fontSize: "22px" }}
                            href="#">
                            Bosh sahifa
                        </Link>
                        <Link className='block mt-8 ubuntu-font font-medium leading-8'
                            style={{ fontSize: "22px" }}
                            href="#">
                            Blog
                        </Link>
                        <Link className='block mt-8 ubuntu-font font-medium leading-8'
                            style={{ fontSize: "22px" }}
                            href="#">
                            Turlar
                        </Link>
                    </div>
                    <div>
                        <Link className='block ubuntu-font font-medium leading-8'
                            style={{ fontSize: "22px" }}
                            href="#">
                            Biz haqimizda
                        </Link>
                        <Link className='block mt-8 ubuntu-font font-medium leading-8'
                            style={{ fontSize: "22px" }}
                            href="#">
                            Blog
                        </Link>
                        <Link className='block mt-8 ubuntu-font font-medium leading-8'
                            style={{ fontSize: "22px" }}
                            href="#">
                            Turlar
                        </Link>
                    </div>
                </div>

                <div className='pt-10'
                    style={{ maxWidth: "389px" }}>
                    <p className='ubuntu-font text-lg leading-7'>
                        Advanced technologies, high capacities and strict control by qualified specialists at every stage of production.
                    </p>
                    <p className='mt-16 ubuntu-font text-base leading-6'>
                        Social media
                    </p>
                    <div className='mt-2 flex gap-8'>
                        <FaYoutube style={{ color: "#ce6240", fontSize: "24px" }} />
                        <FaFacebook style={{ color: "#ce6240", fontSize: "24px" }} />
                        <RiInstagramFill style={{ color: "#ce6240", fontSize: "24px" }} />
                        <FaLinkedin style={{ color: "#ce6240", fontSize: "24px" }} />
                    </div>
                </div>
            </div>

            <div className='mt-7 max-w-1728 ml-auto mr-auto flex justify-between'>
                <p className='text-lg leading-7'
                    style={{ color: " #9a999b" }}>
                    Copyright © 2023 Cavsar tour
                </p>
                <p className='text-lg leading-7'
                    style={{ color: "#020105" }}>
                    All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer