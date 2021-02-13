import React from 'react'
import VideoCard from './VideoCard'
import "../css/Home.scss"

function Home() {
    let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOnsf2DL9DAkkePE_KhyM8Sp8mA-zZ35Qmw&usqp=CAU"
    return (
        <div className="home">
            <h2>Home</h2>
            <div className="home__videoCards">
                <VideoCard
                    title="Атуш"
                    image={img}
                    timestamp="13 Февраля 2021"
                />
                <VideoCard title="video2"
                    image="http://www.ecns.cn/hd/2019/12/04/9e54d14e3da14c77b982f7f197387ce8.jpg"
                    timestamp="13 Февраля 2021" />
                <VideoCard title="video3"
                    image="https://i.ytimg.com/vi/hXbqt6Fq13M/maxresdefault.jpg"
                    timestamp="13 Февраля 2021" />
            </div>
        </div>
    )
}

export default Home
