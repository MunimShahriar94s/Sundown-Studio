import Button from "../Button/Button";
import style from "./Hero.module.css"


function Hero(){
    return(
        <div className={style.Hero}>
            <div className={style.navbar}>
                <div className={style.logo}>
                    <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
                </div>
                <div className={style.link}>
                    <Button text="Work" />
                    <Button text="Studio"/>
                    <Button text="Contact"/>
                 </div>
                 
            </div>
            <div className={style.midSection}>
                <div className={style.leftText}>
                Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
                </div>
                <div className={style.rightText}>
                    <span>SPACES</span>
                    <span>THAT</span>
                    <span>INSPIRE</span>
                </div>
            </div>
            <div className={style.heroShape}>
                <div className={style.hero1}></div>
                <div className={style.hero2}></div>
                <div className={style.hero3}></div>
            </div>
        </div>
    )
}

export default Hero;