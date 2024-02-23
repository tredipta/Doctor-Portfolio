import React from 'react'
import { projectExperience, WhatDoIHelp, WhatDoIHelp2 } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'

const Experties = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div className={css.leftSide}>
            <div className='primaryText'>My Experience</div>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span >{exp.name}</span>
                                <span >{exp.university} </span>
                                <span >{exp.year} </span>
                            </div>
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={css.rightSide}>

                <span className='primaryText'>Un trocito de mi historia</span>
                {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph}</span>)}
                
                <span className='primaryText'>PSICOLOGÍA INFANTIL Y ADOLESCENTE</span>
                {WhatDoIHelp2.map((paragraph2, j)=> <span className='secondaryText' key={j}>{paragraph2}</span>)}

                <div className={`flexCenter ${css.stats}`}>
                    {/* <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>285+</span>
                        <span className='secondaryText'>Project Completed</span>
                    </div> */}
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>500+</span>
                        <span className='secondaryText'>Clientes felices</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties