import { useState } from "react";
import Project from "../Project/Project";
import style from "./FourthSec.module.css"
import Button from "/src/Components/Button/Button"

function FourthSec(){

    const info = [
        {
            id: 1,
            left: "Play New Kidvision",
            top: "NIKE",
            bottom: "Enviroment"
        },
        {
            id:2,
            left: "SOHO NYC",
            top: "ARCTERYX",
            bottom: "Enviroment"
        },
        {
            id:3,
            left: "Makers Studio HOI",
            top: "NIKE",
            bottom: "Experiancial"
        },
        {
            id:4,
            left: "SOHO 2023",
            top: "CONVERSE",
            bottom: "Enviroment"
        },
        {
            id:5,
            left: "NYFW Popup",
            top: "AFTERPAY",
            bottom: "Experiencial"
        },
        {
            id:6,
            left: "Air Force 1 2021",
            top: "NIKE",
            bottom: "Enviroment"
        },
        {
            id:7,
            left: "50th Anniversary",
            top: "Nike",
            bottom: "Enviroment"
        },


    ]

    const [fixedImg, setfixedImg] = useState("")
    const [display, setDisplay] = useState("none")

    console.log(fixedImg)

    function createProject(info){
        return <Project setDisplay={setDisplay} setfixedImg={setfixedImg} id={info.id} key={info.id} left={info.left} top={info.top} bottom={info.bottom} />
    }
    
    return(
        <div className={style.FourthSec}>
            <div className={style.imageContainer}></div>
            <div className={style.header}>
                <img src="https://sundown-ivory.vercel.app/icon.png" alt="" />
                <span>Featured Projects</span>
            </div>
            <div className={style.main}>
                {info.map(createProject)}
            </div>
            <div className={style.btn}><Button text="All Projects" /></div>
            <div className={style.imageShape}><img src={fixedImg} style={{display: display}} alt="" /></div>
        </div>
    )
}



export default FourthSec;
