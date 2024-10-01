import React from 'react'

const Home5 = () => {
    return (
        <div className='container max-w-full'>
            <div className='relative mt-24 ml-auto mr-auto fon bg-left-top bg-repeat flex flex-wrap justify-end rounded-32 overflow-hidden'>
                <div className='absolute 2xl:pl-16 2xl:pt-16 top-0 left-0 z-10 pl-4 pt-4 2xl:pr-0 pr-36'
                    style={{ width: "634px" }}>
                    <p className='mb-4 text-white ubuntu-font leading-10 font-medium text-3xl text-shadow'>
                        Savolingiz bormi
                    </p>
                    <p className='mb-4 text-white text-lg leading-7 ubuntu-font text-shadow'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit et iusto iure saepe, quos libero similique! Necessitatibus, rerum? Provident, maxime odit. Amet consequuntur error doloremque sit. Numquam, nobis!
                    </p>
                    <p className='mb-8 text-white ubuntu-font font-medium leading-14 text-shadow'
                        style={{ fontSize: "44px" }}>
                        +998 (90) 168-22-71
                    </p>
                    <button className='bg-white rounded-xl py-4 px-16 ubuntu-font font-medium leading-5 text-base'
                        style={{ color: "#ce6240" }}>
                        Batafsil maslahat
                    </button>
                </div>
                <div className='relative w-auto'
                    style={{ width: "1096px", height: "464px" }}>
                    <img className='absolute right-0 top-0'
                        src="./mountain.png" alt="mountain" />

                    <img className='absolute -left-20 top-0'
                        src="./vector.png" alt="mountain" />
                </div>

            </div>
        </div>

    )
}

export default Home5 