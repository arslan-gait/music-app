import React from 'react'
import '../css/VideoPage.scss'
import { useParams } from 'react-router-dom'

function VideoPage() {
    let { songItem } = useParams();
    console.log("title is" + songItem)

    if (songItem === 'Атуш') {
    return (
        <div className="videoPage">
            <h4>{songItem}</h4>
            <div className="videoPage__song">
                <p>
                    Atushung'gha barghunche<br />
                    Chekmanimni saya ëtip<br />
                    Chekmanimni saya ëtip<br />
                    Sayesinde uzem yatip<br />
                    Sen yarimni yat ettim<br />
                    Sen yarimni yat ettim<br />
                    Oh, Gulayim<br />
                    Zhüregim küyüdu dayim<br />
                    Qandaq qilimiz, Gulayim?<br />
                    Oh-oh<br />
                    Nege barimiz ayim?<br />
                    Oh-oh<br />
                    Sëning menu, sëning men!<br />
                    Sëning bolmay kimning men?<br />
                    Atushning bazarida, jënim<br />
                    Sëtiwalghan qulung men!<br />
                    Sëning menu, sëning men!<br />
                    Sëning bolmay kimning men?<br />
                    Atushning bazarida, jënim<br />
                    Sëtiwalghan qulung men!<br />
                    Oh-oh<br />
                    Tallawalghan qulung men!<br />
                    Atushning yoli yaman<br />
                    Toshudu otun zaman<br />
                    Toshudu otun zaman<br />
                    Nadan bala bilmaydu<br />
                    Hammidin kuyek yaman<br />
                    Hammidin kuyek yaman<br />
                    Oh, Gulayim<br />
                    Zhüregim küyüdu dayim<br />
                    Qandaq qilimiz, Gulayim?<br />
                    Oh-oh<br />
                    Nege barimiz ayim?<br />
                    Oh-oh<br />
                    Sëning menu, sëning men!<br />
                    Sëning bolmay kimning men?<br />
                    Atushning bazarida, jënim<br />
                    Sëtiwalghan qulung men!<br />
                    Sëning menu,…</p>
            </div>
            <div className="videoPage__video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OH-tiUapVzE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>

    )
    } else return(
        <div className="videoPage">
        <h4>{songItem}</h4>
        <div className="videoPage__song">-
        Пока нету
        </div>
        </div>
    )
}

export default VideoPage
