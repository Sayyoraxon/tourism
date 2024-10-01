import React from 'react'

const Home1 = () => {
    return (
        <div className='mt-36 ml-auto mr-auto flex flex-wrap gap-14 container'
            style={{ maxWidth: "1437px" }}>
            <div className='grow'
                style={{ width: "307px" }}>
                <img className='mb-10'
                    src="./Ticket.svg" alt="ticket" />
                <p className='ubuntu-font text-lg font-bold mb-2 leading-7'>
                    VIZANI OSON OLISHINGIZ UCHUN
                </p>
                <p className='ubuntu-font leading-7 font-light text-lg'>
                    Mutaxassislarimiz tomonidan beriladigan viza olish haqidagi yo‘riq va ko‘rsatmalar bilan sayohatingiz yanada tezlashadi.
                </p>
            </div>
            <div className='grow'
                style={{ width: "307px" }}>
                <img className='mb-10'
                    src="./Airplane.svg" alt="ticket" />
                <p className='ubuntu-font text-lg font-bold mb-2 leading-7'>
                    SIZGA MA'QUL TURNI TANLAB BERAMIZ
                </p>
                <p className='ubuntu-font leading-7 font-light text-lg'>
                    Tur operatorlarimiz sizga sifatli, hamyonbop va eng asosiysi, siz uchun qulay bo‘lgan turlarni tanlab berishadi.
                </p>
            </div>
            <div className='grow'
                style={{ width: "307px" }}>
                <img className='mb-10'
                    src="./Camping.svg" alt="ticket" />
                <p className='ubuntu-font text-lg font-bold mb-2 leading-7'>
                    VAQTINGIZNI MAROQLI O'TISHINI KAFOLATLAYMIZ!
                </p>
                <p className='ubuntu-font leading-7 font-light text-lg'>
                    Qiziqishlaringizga mos keladigan turli xil shoular va o‘yinlar, ichki ko‘ngilochar sayohatlarga boy tur bilan vaqtingizni maroqli va esda qolarli o‘tishini kafolatlaymiz.
                </p>
            </div>
            <div className='grow'
                style={{ width: "307px" }}>
                <img className='mb-10'
                    src="./Umbrella.svg" alt="ticket" />
                <p className='ubuntu-font text-lg font-bold mb-2 leading-7'>
                    MEHMONXONALARGA JOYLASHTIRAMIZ
                </p>
                <p className='ubuntu-font leading-7 font-light text-lg'>
                    Aeroportdan mehmonxonagacha xavfsiz borib joylashishingizni avvaldan rejalashtirib beramiz.
                </p>
            </div>
        </div>
    )
}

export default Home1