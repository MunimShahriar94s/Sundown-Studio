import Scroller from "../Scroller/Scroller";
import style from "./SecondSec.module.css"

function SecondSec(){
    return (
        <div className={style.SecondSec}>
            <video muted loop autoPlay src="https://sundown-ivory.vercel.app/video.mp4"></video>
            <Scroller />
        </div>
        
    )
}

export default SecondSec;