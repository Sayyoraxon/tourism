import React from 'react'
import { GoMail } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from 'next/link';


const Header = () => {

    const handlleActive = (el) => {
        const links = Array.from(el.parentElement.children)
        links.forEach((link) => {
            link.classList.remove("active")
        })

        el.classList.add("active")
    }

    return (
        <div className="max-w-full relative"
            style={{ backgroundColor: "#ce6240", height: "778px" }}>
            <div className='flex justify-between pl-101 pr-24 h-11 items-center'
                style={{ background: "rgba(2, 1, 5, 0.08)" }}>
                <div className='flex items-center ubuntu-font'>
                    <div className='flex items-center mr-12'>
                        <GoMail style={{ color: "#fff", fontSize: "20px" }} />
                        <p className='text-white text-base leading-5 font-medium ml-2.5'>
                            mail.com
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <LuPhone style={{ color: "#fff", fontSize: "20px" }} />
                        <p className='text-white text-base leading-5 font-medium ml-2.5'>
                            +998 90 168 22 72
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-32'>
                    <BsYoutube style={{ color: "#fff", fontSize: "22px" }} />
                    <FaFacebook style={{ color: "#fff", fontSize: "20px" }} />
                    <RiInstagramFill style={{ color: "#fff", fontSize: "20px" }} />
                </div>
            </div>

            <div className='max-w-1728 mr-auto ml-auto container'>
                <div className='sf-font'
                    style={{ maxWidth: "710px" }}>
                    <div className='flex flex-wrap gap-x-3.5 gap-y-1 text-sm font-normal text-white opacity-60 mt-7 mb-3'>
                        <p>
                            г.Ташкент
                        </p>
                        <p>
                            Корпоративным клиентам
                        </p>
                        <p>
                            toaragency@gmail.com
                        </p>
                        <p>
                            +90 123-45-67
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-x-6 gap-y-1 text-white font-medium'
                        style={{ fontSize: "22px" }}
                        onClick={(e) => handlleActive(e.target)}>
                        <Link href="/">
                            Главная
                        </Link>
                        <Link href="">
                            Туры
                        </Link>
                        <Link href="">
                            Направлении
                        </Link>
                        <Link href="">
                            О нас
                        </Link>
                        <Link href="">
                            Бронирование
                        </Link>
                        <Link href="">
                            Блог
                        </Link>
                        <Link href="">
                            Отзывы
                        </Link>
                        <Link href="">
                            Медия-галлерея
                        </Link>
                    </div>
                    <div className='mt-16 relative z-20'>
                        <p className='text-white font-bold m-0 p-0'
                            style={{ fontSize: "56px", lineHeight: "67px" }}>
                            Hayotning Yorqin tomonida bo'ling! Sayohat qiling!
                        </p>

                        <div className='flex gap-2.5 mt-9'>
                            <button className='py-2.5 px-14 bg-white rounded-xl ubuntu-font font-medium text-sm'
                                style={{ color: "#ce6249" }}>
                                Batafsil
                            </button>
                            <button className='py-2.5 px-14 rounded-xl ubuntu-font font-medium text-sm'
                                style={{ color: "#fff", border: "3px solid #fff" }}>
                                Turlar
                            </button>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-40 right-0'
                    style={{width: "1000px", height: "400px", backgroundImage: "radial-gradient(closest-corner at 70% 65%, #ffe692, #ce6240 80% )" }}>
                        </div>
                    <img className='absolute right-0 bottom-0 z-10'
                        src="./madrasa.png" alt="photo" />
                    <img className='absolute right-0 top-0 z-0'
                        src="./clouds.png" alt="clouds" />

                <div className='absolute left-1/2 bottom-16 z-20 flex gap-0 -translate-x-1/2'
                    style={{ width: "1437px", height: "195px"}}>
                    <div className='relative left-px pt-7 px-12 rounded-l-2xl rounded-r-md backdrop-blur border-t border-l border-b'
                    style={{background: "rgba(31, 33, 36, 0.24)"}}>
                        <p className='text-white font-normal text-2xl mb-9 prosto-font'>
                            Biz sizga Tur tanlashga yordam beramiz! Bizga aloqaga chiqing
                        </p>
                        <input className='bg-transparent text-white placeholder-white font-normal text-lg ubuntu-font border-b border-white h-14 mr-6 outline-none'
                            style={{ width: "412px" }}
                            type="text" placeholder='Ismingiz' />
                        <input className='bg-transparent text-white placeholder-white font-normal text-lg ubuntu-font border-b border-white h-14 mr-6 outline-none'
                            style={{ width: "412px" }}
                            type="text" placeholder='Telefon raqamingiz' />
                        <button className='text-lg text-white ubuntu-font font-medium h-14 rounded-xl'
                            style={{ width: "183px", backgroundColor: "#ff7044" }}>
                            Jo'natish
                        </button>
                    </div>
                    <div className='my-3 relative w-6 pt-3 backdrop-blur'
                    style={{background: "rgba(31, 33, 36, 0.24)"}}>
                        <div className='absolute w-6 h-6 -top-6 left-0 rounded-full border-b'></div>
                        <div className='absolute w-6 h-6 -bottom-6 left-0 rounded-full border-t'></div>
                        <div className='absolute w-2 h-2 -top-2 left-px backdrop-blur'
                        style={{backgroundImage: "linear-gradient(to bottom left, transparent 40%, rgba(31, 33, 36, 0.5))"}}></div>
                        <div className='absolute w-2 h-2 -top-2 right-px backdrop-blur'
                        style={{backgroundImage: "linear-gradient(to bottom right, transparent 40%, rgba(31, 33, 36, 0.5))"}}></div>
                        <div className='absolute w-2 h-2 -bottom-2 left-px backdrop-blur'
                        style={{backgroundImage: "linear-gradient(to top left, transparent 40%, rgba(31, 33, 36, 0.5))"}}></div>
                        <div className='absolute w-2 h-2 -bottom-2 right-px backdrop-blur'
                        style={{backgroundImage: "linear-gradient(to top right, transparent 40%, rgba(31, 33, 36, 0.5))"}}></div>
                        <div className='w-px h-1 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-2 bg-white relative left-3'></div>
                        <div className='w-px h-2 bg-transparent'></div>
                        <div className='w-px h-1 bg-white relative left-3'></div>
                    </div>

                    <div className='relative right-px py-5 px-9 text-center prosto-font rounded-r-2xl rounded-l-md backdrop-blur border-t border-b border-r'
                    style={{background: "rgba(31, 33, 36, 0.24)"}}>
    
                        <p className='text-base font-normal text-white mb-3'>
                            Biz bilan aloqa
                        </p>
                        <p className='text-xl text-white font-normal mb-9'>
                            +998 90 168 22 72
                        </p>
                        <p  className='text-base font-normal text-white mb-3'>
                            Asosiy nomer
                        </p>
                        <p className='text-xl text-white font-normal'>
                            +998 90 168 22 72
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header