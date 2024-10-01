import MySwiper from "./mySwiper"


const Home10 = () => {
    return (
        <div className="container max-w-full">
            <p className='ubuntu-font font-medium mb-28 max-w-1728 ml-auto mr-auto'
                style={{ fontSize: "40px", lineHeight: "52px" }}>
                Bizning <span style={{ color: "#ce6240" }}>hamkorlarimiz</span>
            </p>
            <div className='max-w-1728 ml-auto mr-auto'>
               <MySwiper/>
            </div>
        </div>
    )
}

export default Home10