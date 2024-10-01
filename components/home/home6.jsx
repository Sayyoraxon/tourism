import Image from 'next/image';

const Home6 = () => {
    return (
        <div className='max-w-full mt-24 container'>
            <div className='flex items-center mb-9 max-w-1728 ml-auto mr-auto'>
                <p className='ubuntu-font font-medium'
                    style={{ fontSize: "40px", lineHeight: "52px" }}>
                    Galereya
                </p>
                <button className='ml-4 ubuntu-font text-base font-medium leading-7 underline'
                    style={{ color: "#ce6240" }}>
                    Barchasini ko'rish
                </button>
            </div>
            <div className='ml-auto, mr-auto max-w-1728 ml-auto mr-auto flex gap-6 flex-wrap 2xl:flex-nowrap'>
                <div className='grow'>
                    <div className='flex gap-6 mb-6'>
                        <div className='relative'>
                            <Image className='rounded-3xl object-cover grow'
                                src="/dubai.png" alt='dubai'
                                width={414}
                                height={408} />
                            <div className='absolute bottom-6 left-6 flex justify-between items-center px-4'
                                style={{ background: "rgba(255, 255, 255, 0.24)", borderRadius: "500px" }} >
                                <Image
                                    src="location-user.svg"
                                    alt="user"
                                    width={24}
                                    height={24}
                                />
                                <p className='ubuntu-font leading-7 text-white text-sm ml-1'>
                                    Maldiv Island
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='rounded-3xl object-cover grow'
                                src="/istanbul.png" alt='istanbul'
                                width={706}
                                height={408} />
                            <div className='absolute bottom-6 left-6 flex justify-between items-center px-4'
                                style={{ background: "rgba(255, 255, 255, 0.24)", borderRadius: "500px" }} >
                                <Image
                                    src="location-user.svg"
                                    alt="user"
                                    width={24}
                                    height={24}
                                />
                                <p className='ubuntu-font leading-7 text-white text-sm ml-1'>
                                    Maldiv Island
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-6'>
                        <div className='relative'>
                            <Image className='rounded-3xl object-cover grow'
                                src="/istanbul2.png" alt='istanbul'
                                width={706}
                                height={408} />
                            <div className='absolute bottom-6 left-6 flex justify-between items-center px-4'
                                style={{ background: "rgba(255, 255, 255, 0.24)", borderRadius: "500px" }} >
                                <Image
                                    src="location-user.svg"
                                    alt="user"
                                    width={24}
                                    height={24}
                                />
                                <p className='ubuntu-font leading-7 text-white text-sm ml-1'>
                                    Turkey, Istanbul, Собор Святой Софии
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='rounded-3xl object-cover grow'
                                src="/sultonahmad.png" alt='dubai'
                                width={414}
                                height={408} />
                            <div className='absolute bottom-6 left-6 flex justify-between items-center px-4'
                                style={{ background: "rgba(255, 255, 255, 0.24)", borderRadius: "500px" }} >
                                <Image
                                    src="location-user.svg"
                                    alt="user"
                                    width={24}
                                    height={24}
                                />
                                <p className='ubuntu-font leading-7 text-white text-sm ml-1'>
                                    Maldiv Island
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='grow flex gap-6 2xl:flex-col flex-row flex-wrap'>
                    <div className='relative'>
                        <img className='object-cover rounded-3xl responsive'
                            src='/dubai2.png' alt="dubai"
                        />
                        <div className='absolute bottom-6 left-6 flex justify-between items-center px-4'
                                style={{ background: "rgba(255, 255, 255, 0.24)", borderRadius: "500px" }} >
                                <Image
                                    src="location-user.svg"
                                    alt="user"
                                    width={24}
                                    height={24}
                                />
                                <p className='ubuntu-font leading-7 text-white text-sm ml-1'>
                                    Maldiv Island
                                </p>
                            </div>
                    </div>

                    <div className='relative'>
                        <img className='object-cover rounded-3xl responsive1'
                            src='/dubai3.png' alt="dubai"
                        />
                        <div className='absolute bottom-6 left-6 flex justify-between items-center px-4'
                                style={{ background: "rgba(255, 255, 255, 0.24)", borderRadius: "500px" }} >
                                <Image
                                    src="location-user.svg"
                                    alt="user"
                                    width={24}
                                    height={24}
                                />
                                <p className='ubuntu-font leading-7 text-white text-sm ml-1'>
                                    Maldiv Island
                                </p>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home6