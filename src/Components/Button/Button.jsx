import { useRef } from "react";
import style from "./Button.module.css"
import gsap from "gsap"

function Button(props){

    const blackShape = useRef()
    const btn = useRef()

    const bgToBlack = () => {
        gsap.to(blackShape.current, {
            y: -25,
            duration: 0.5,
            ease: "power2.out"
        })
        gsap.to(btn.current, {
            color: "white",
            duration: 0.25,
            ease: "power2.out"
        })
    }
    const bgToWhite = () =>{
        gsap.to(btn.current, {
            color: "black",
            duration: 0.25,
            ease: "power2.out"
        })
        gsap.to(blackShape.current, {
            y: 40,
            duration: 0.5,
            ease: "power2.out"
        })
    }
    

    return(
    <div ref={btn} onMouseEnter={bgToBlack} onMouseLeave={bgToWhite} className={style.btn}>
        <span>{props.text}</span>
        <div ref={blackShape} className={style.blackShape}></div>
    </div>
    )
}

export default Button;