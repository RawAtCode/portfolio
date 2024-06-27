import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      className="about"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="about-header" variants={textVariants}>
        <motion.h1 variants={textVariants}>About Me</motion.h1>
        <motion.hr variants={textVariants} />
      </motion.div>

      <motion.div className="about-content" variants={textVariants}>
        <motion.p className="about-one" variants={textVariants}>
          I am a dedicated and passionate web developer with a strong interest in data structures and algorithms. My journey in the tech world began with a fascination for how things work behind the scenes on the web, leading me to delve deep into the intricacies of web development.
        </motion.p>
        <motion.p className="about-two" variants={textVariants}>
          I specialize in creating dynamic and responsive web applications that are both efficient and scalable. My technical expertise spans a broad range of modern web technologies, including HTML, CSS, JavaScript, React, and Next.js, among others. I am committed to continuous learning and keeping up-to-date with the latest trends and advancements in the web development field.
        </motion.p>
      </motion.div>

      <motion.div className="about-techstack" variants={textVariants}>
        <motion.h2 variants={textVariants}>Tech Stack</motion.h2>
        <motion.hr variants={textVariants} />
        <motion.div className="tech-list" variants={textVariants}>
          {["HTML", "CSS / SCSS", "JavaScript", "TypeScript", " BootStrap", "React", "Next.js", "PHP", "C", "C++", "Java", "Python", "MySQL", "Firebase", "Git"].map((tech) => (
            <motion.div className="tech" key={tech} variants={textVariants}>
              <h3>{tech}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
