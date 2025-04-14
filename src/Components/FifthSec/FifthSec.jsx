import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import style from "./FifthSec.module.css"


function FifthSec(){

    const bottomText= [
        "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
        "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
        "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    ]
    const rightImg = [
        "https://sundown-ivory.vercel.app/page4-1.webp",
        "https://sundown-ivory.vercel.app/page4-2.webp",
        "https://sundown-ivory.vercel.app/page4-3.webp"
    ]

    const design = useRef()
    const project = useRef()
    const execution = useRef()

    const [display, setDisplay] = useState(0)

    function designOnclick(){
        gsap.to(design.current, {
            x: 0,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#ECE7E0",
        })
        gsap.to(project.current, {
            x: 10,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#504A45",
        })
        gsap.to(execution.current, {
            x: 10,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#504A45",
        })
        setDisplay(0)
    }

    function projectOnclick(){
        gsap.to(project.current, {
            x: 0,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#ECE7E0",
        })
        gsap.to(design.current, {
            x: 10,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#504A45",
        })
        gsap.to(execution.current, {
            x: 10,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#504A45",
        })
        setDisplay(1)
    } 

    function executionOnclick(){
        gsap.to(execution.current, {
            x: 0,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#ECE7E0",
        })
        gsap.to(design.current, {
            x: 10,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#504A45",
        })
        gsap.to(project.current, {
            x: 10,
            duration: 0.2,
            ease: "power1.inOut",
            color: "#504A45",
        })
        setDisplay(2)
    }
    
    useEffect(() => {
        if (design.current) {
          design.current.click(); // Triggers the click on load
        }
      }, []);
    

    return(
        <div className={style.fifthSec}>
            <div className={style.left}>
                <div className={style.top}>
                    <div ref={design} onClick={designOnclick}>Design</div>
                    <div ref={project} onClick={projectOnclick}>Project</div>
                    <div ref={execution} onClick={executionOnclick}>Execution</div>
                </div>
                <div className={style.bottom}></div>
            </div>
            <div className={style.right}><img src={rightImg[display]} alt="" /></div>
        </div>
    )
}
export default FifthSec