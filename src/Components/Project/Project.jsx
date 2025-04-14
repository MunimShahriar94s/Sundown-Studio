import { useState, useRef } from "react";
import gsap from "gsap"
import style from "./Project.module.css"

const fixedImageUrls = [
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1643_Copy%2520of%2520DSC04080-p-1600.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009-p-1600.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp"
                    ]




function Project(props){

    const shape = useRef()
    const proj = useRef()
   
    
    

  
    
    const backgroundChangeToOrange = () => {
       
        gsap.to(shape.current, {
            yPercent: 100,
            duration: 0.15,
            delay: 0.05
        })

        props.setfixedImg(fixedImageUrls[parseInt(props.id - 1)])
        props.setDisplay("block")
        
        
    }
    const backgroundChangeToWhite = () => {
       
        gsap.to(shape.current, {
            yPercent: 0,
            duration: 0.15,
            delay: 0.05
        })

        props.setfixedImg("")
        props.setDisplay("none")
      
    }

    
    return(
    <div ref={proj} onMouseEnter={backgroundChangeToOrange} onMouseLeave={backgroundChangeToWhite} className={style.project} >
        <div ref={shape} className={style.orangeShape}></div>
        <div className={style.left}>{props.left}</div>
            <div className={style.right}>
                <div className={style.top}>{props.top}</div>
                <div className={style.bottom}>{props.bottom}</div>
            </div>
    </div>
    )
    
}

export default Project;

