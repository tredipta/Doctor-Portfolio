import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
          Hola,
            <br />
          Soy clara.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          Mi objetivo es fomentar un entorno seguro y de apoyo
          <br/>
          donde los clientes puedan explorar sus pensamientos,
          <br/>
          sentimientos y experiencias para lograr sus objetivos.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        {/* <a className={css.email} href="mailto:claralopezpscicolga@gmail.com">
          claralopezpscicolga@gmail.com
        </a> */}

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">|</div>
            <div className="secondaryText">
              <div>Todo lo que nos irrita de los demás puede </div>
              <div>llevarnos a comprendernos a nosotros mismos.</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>PROFACIONAL CERTIFICADO</span>
            <span>PSICÓLOGA</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
