import React from 'react'

const Home2 = () => {
    return (
        <div className='ml-auto mr-auto mt-10 container'
            style={{ maxWidth: "1435px" }}>
            <p className='mb-10 ubuntu-font font-medium leading-10'
                style={{ fontSize: "32px" }}>
                Sayohat yo'nalishlari
            </p>
            <div className='w-full flex gap-5 flex-wrap'>
                <div className='relative pl-6 pt-6 rounded-2xl grow'
                    style={{ width: "463px", height: "312px", background: "#ffe3ce" }}>
                    <p className='ubuntu-font leading-8 font-semibold text-2xl mb-4'
                        style={{ color: "#002856" }}>
                        O'zbekiston bo'ylab turlar
                    </p>
                    <button className='w-40 h-9 bg-white ubuntu-font leading-4 font-medium text-sm'
                        style={{ borderRadius: "500px", color: "#121212" }}>
                        Turlarni ko'rish
                    </button>
                    <img className='absolute right-0 bottom-0 z-10'
                        src="./card1.png" alt="card" />
                    <img className='absolute bottom-0 right-0'
                        src="./cloud1.png" alt="cloud" />
                </div>

                <div className='relative pl-6 pt-6 rounded-2xl grow'
                    style={{ width: "463px", height: "312px", background: "#ffe3ce" }}>
                    <p className='ubuntu-font leading-8 font-semibold text-2xl mb-4'
                        style={{ color: "#002856" }}>
                        Tashqi turlar
                    </p>
                    <button className='w-40 h-9 bg-white ubuntu-font leading-4 font-medium text-sm'
                        style={{ borderRadius: "500px", color: "#121212" }}>
                        Turlarni ko'rish
                    </button>
                    <img className='absolute right-0 bottom-0 z-10'
                        src="./image 110.png" alt="card" />
                    <img className='absolute bottom-0 right-0'
                        src="./cloud2.png" alt="cloud" />
                </div>

                <div className='relative pl-6 pt-6 rounded-2xl grow'
                    style={{ width: "463px", height: "312px", background: "#ffe3ce" }}>
                    <p className='ubuntu-font leading-8 font-semibold text-2xl mb-4'
                        style={{ color: "#002856" }}>
                        Ziyorat turlari
                    </p>
                    <button className='w-40 h-9 bg-white ubuntu-font leading-4 font-medium text-sm'
                        style={{ borderRadius: "500px", color: "#121212" }}>
                        Turlarni ko'rish
                    </button>
                    <img className='absolute right-0 bottom-0 z-10'
                        src="./card3.png" alt="card" />
                    <img className='absolute bottom-0 right-0'
                        src="./cloud3.png" alt="cloud" />
                </div>
                
            </div>
        </div>
    )
}

export default Home2