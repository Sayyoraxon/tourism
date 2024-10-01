import Image from 'next/image'
import React from 'react'

const Home8 = () => {
    return (
        <div className='max-w-full mt-40 container'>
            <div className='flex items-center mb-8 max-w-1728 ml-auto mr-auto'>
                <p className='ubuntu-font font-medium'
                    style={{ fontSize: "40px", lineHeight: "52px" }}>
                    Haftaning eng yaxshi aksiyalari
                </p>
                <button className='ml-4 ubuntu-font text-base font-medium leading-7 underline'
                    style={{ color: "#ce6240" }}>
                    Barchasini ko'rish
                </button>
            </div>
            <div className='flex flex-wrap max-w-1728 ml-auto mr-auto gap-6 rounded-xl'>
                <div className='grow p-2 border rounded-2xl'
                    style={{ width: "414px", borderColor: "#e1e1e1" }}>
                    <img className='w-full'
                        src="./card_1.png" alt="card" />
                    <p className='pl-3 mt-4 ubuntu-font leading-8 font-medium text-xl'>
                        Erta bron qilish marafoni
                    </p>
                    <p className='pl-3 mt-4 ubuntu-font font-normal leading-5 text-base'
                        style={{ color: "#353437" }}>
                        oilaviy mehmonxonalarda katta chegirmalar
                    </p>
                    <div className='pl-3 flex items-center gap-1 mt-4'>
                        <Image
                            src="clock-circle.svg"
                            alt="clock"
                            width={20}
                            height={20}
                        />
                        <p className='mt-auto ubuntu-font text-sm leading-4 font-normal'
                            style={{ color: "#5d5d5d" }}>
                            13 февраля 2023
                        </p>
                    </div>
                </div>

                <div className='grow p-2 border rounded-2xl'
                    style={{ width: "414px", borderColor: "#e1e1e1" }}>
                    <img className='w-full'
                        src="./card_2.png" alt="card" />
                    <p className='pl-3 mt-4 ubuntu-font leading-8 font-medium text-xl'>
                        Erta bron qilish marafoni
                    </p>
                    <p className='pl-3 mt-4 ubuntu-font font-normal leading-5 text-base'
                        style={{ color: "#353437" }}>
                        oilaviy mehmonxonalarda katta chegirmalar
                    </p>
                    <div className='pl-3 flex items-center gap-1 mt-4'>
                        <Image
                            src="clock-circle.svg"
                            alt="clock"
                            width={20}
                            height={20}
                        />
                        <p className='mt-auto ubuntu-font text-sm leading-4 font-normal'
                            style={{ color: "#5d5d5d" }}>
                            13 февраля 2023
                        </p>
                    </div>
                </div>

                <div className='grow p-2 border rounded-2xl'
                    style={{ width: "414px", borderColor: "#e1e1e1" }}>
                    <img className='w-full'
                        src="./card_3.png" alt="card" />
                    <p className='pl-3 mt-4 ubuntu-font leading-8 font-medium text-xl'>
                        Erta bron qilish marafoni
                    </p>
                    <p className='pl-3 mt-4 ubuntu-font font-normal leading-5 text-base'
                        style={{ color: "#353437" }}>
                        oilaviy mehmonxonalarda katta chegirmalar
                    </p>
                    <div className='pl-3 flex items-center gap-1 mt-4'>
                        <Image
                            src="clock-circle.svg"
                            alt="clock"
                            width={20}
                            height={20}
                        />
                        <p className='mt-auto ubuntu-font text-sm leading-4 font-normal'
                            style={{ color: "#5d5d5d" }}>
                            13 февраля 2023
                        </p>
                    </div>
                </div>

                <div className='grow p-2 border rounded-2xl'
                    style={{ width: "414px", borderColor: "#e1e1e1" }}>
                    <img className='w-full'
                        src="./card_4.png" alt="card" />
                    <p className='pl-3 mt-4 ubuntu-font leading-8 font-medium text-xl'>
                        Erta bron qilish marafoni
                    </p>
                    <p className='pl-3 mt-4 ubuntu-font font-normal leading-5 text-base'
                        style={{ color: "#353437" }}>
                        oilaviy mehmonxonalarda katta chegirmalar
                    </p>
                    <div className='pl-3 flex items-center gap-1 mt-4'>
                        <Image
                            src="clock-circle.svg"
                            alt="clock"
                            width={20}
                            height={20}
                        />
                        <p className='mt-auto ubuntu-font text-sm leading-4 font-normal'
                            style={{ color: "#5d5d5d" }}>
                            13 февраля 2023
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-1728 ml-auto mr-auto'>
                <button className='mt-6 w-80 h-14 rounded-xl border ubuntu-font font-medium text-xm leading-5'
                    style={{ color: "#ce6240", borderColor: "#ce6240" }}>
                    Barchasini ko'rish
                </button>
            </div>

        </div>
    )
}

export default Home8