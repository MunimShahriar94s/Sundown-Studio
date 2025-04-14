import style from "./ThirdSec.module.css"

function ThirdSec(){
    return(
        <div className={style.ThirdSec}>
            <div className={style.left}>
                <div className={style.text}>
                We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
                </div>
                <div className={style.shapes}>
                    <div className={style.shape1}/>
                    <div className={style.shape2}/>
                    <div className={style.shape3}/>
                </div>
            </div>
            <div className={style.right}>
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt="" />
            <div className={style.text}></div>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
            </div>
        </div>
    )
}

export default ThirdSec;