import Image from 'next/image'
import React from 'react'

const Home7 = () => {
    return (
        <div className='mt-24 max-w-full container'>
            <div className='flex items-center mb-9 max-w-1728 ml-auto mr-auto'>
                <p className='ubuntu-font font-medium'
                    style={{ fontSize: "40px", lineHeight: "52px" }}>
                    Qiziqarli ma'lumotlar
                </p>
                <button className='ml-4 ubuntu-font text-base font-medium leading-7 underline'
                    style={{ color: "#ce6240" }}>
                    Barchasini ko'rish
                </button>
            </div>
            <div className='max-w-1728 ml-auto mr-auto flex flex-wrap gap-6'>
                <div className='p-4 rounded-3xl border grow'
                    style={{ borderColor: "#e1e1e1", width: "706px" }}>
                    <img
                        src="/makka.png"
                        alt="makka"
                        className='w-full'
                    />
                    <p className='mt-6 ubuntu-font font-medium leading-6 text-xl'>
                        Exciting Discoveries And Adventures Adventures
                    </p>
                    <p className='mt-3.5 ubuntu-font text-base font-normal'>
                        Everything was seamless. The private guides were interesting and...
                    </p>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            <Image
                                src="clock-circle.svg"
                                alt="clock"
                                width={20}
                                height={20}
                            />
                            <p className='ubuntu-font text-sm leading-4 font-normal'>
                                13 февраля 2023
                            </p>
                        </div>
                        <button className='w-36 h-12 rounded-xl border ubuntu-font text-base leading-5 font-medium'
                            style={{ color: "#ce6240", borderColor: "#ce6240" }}>
                            Batafsil
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-6 grow'>
                    <div className='p-4 rounded-3xl border grow full1'
                        style={{ borderColor: "#e1e1e1"}}>
                        <img
                            src="/mosque.png"
                            alt="makka"
                            className='w-full'
                        />
                        <p className='mt-4 ubuntu-font font-medium leading-6 text-base'>
                            Exciting Discoveries And Adventures Adventures
                        </p>
                        <div className='flex items-center gap-1 mt-1'>
                            <Image
                                src="clock-circle.svg"
                                alt="clock"
                                width={20}
                                height={20}
                            />
                            <p className='ubuntu-font text-sm leading-4 font-normal'>
                                13 февраля 2023
                            </p>
                        </div>
                    </div>
                    <div className='p-4 rounded-3xl border grow full1'
                        style={{ borderColor: "#e1e1e1"}}>
                        <img
                            src="/kaba1.png"
                            alt="makka"
                            className='w-full'
                        />
                        <p className='mt-4 ubuntu-font font-medium leading-6 text-base'>
                            Exciting Discoveries And Adventures Adventures
                        </p>
                        <div className='flex items-center gap-1 mt-1'>
                            <Image
                                src="clock-circle.svg"
                                alt="clock"
                                width={20}
                                height={20}
                            />
                            <p className='ubuntu-font text-sm leading-4 font-normal'>
                                13 февраля 2023
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 grow'>
                    <div className='p-4 rounded-3xl border grow flex gap-4 full'
                        style={{ borderColor: "#e1e1e1" }}>
                        <img src="sulton-ahmad2.png" alt="makka"
                            className='w-1/2' />
                        <div className='flex flex-col'>
                            <p className='ubuntu-font font-medium leading-8 text-lg'>
                                Exciting Discoveries And Adventures Adventures
                            </p>
                            <p className='ubuntu-font text-sm mt-2.5'
                                style={{ color: "#353437" }}>
                                Everything was seamless. The private guides were interesting and...
                            </p>
                            <div className='flex items-center gap-1 mt-auto'>
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
                    <div className='p-4 rounded-3xl border grow flex gap-4 full'
                        style={{ borderColor: "#e1e1e1" }}>
                        <img src="adventure.png" alt="makka"
                            className='w-1/2' />
                        <div className='flex flex-col'>
                            <p className='ubuntu-font font-medium leading-8 text-lg'>
                                Exciting Discoveries And Adventures Adventures
                            </p>
                            <p className='ubuntu-font text-sm mt-2.5'
                                style={{ color: "#353437" }}>
                                Everything was seamless. The private guides were interesting and...
                            </p>
                            <div className='flex items-center gap-1 mt-auto'>
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
                    <div className='p-4 rounded-3xl border grow flex gap-4 full'
                        style={{ borderColor: "#e1e1e1"}}>
                        <img src="dubai4.png" alt="makka"
                            className='w-1/2' />
                        <div className='flex flex-col'>
                            <p className='ubuntu-font font-medium leading-8 text-lg'>
                                Exciting Discoveries And Adventures Adventures
                            </p>
                            <p className='ubuntu-font text-sm mt-2.5'
                                style={{ color: "#353437" }}>
                                Everything was seamless. The private guides were interesting and...
                            </p>
                            <div className='flex items-center gap-1 mt-auto'>
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
                </div>
            </div>
        </div>
    )
}

export default Home7