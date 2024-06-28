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
        <motion.div className="img-container">
          <img src="https://images.pexels.com/photos/12812690/pexels-photo-12812690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about-img" />
        </motion.div>
        <motion.p className="about-one" variants={textVariants}>
          Experienced Web Developer with a strong background in web development, data structures and algorithms, and database management. Holds a Master's in Computer Applications with Software Engineering as the specialization. Passionate about continuous learning and staying updated with the latest technologies.
        </motion.p>
      </motion.div>

      <motion.div className="about-techstack" variants={textVariants}>
        <motion.h2 variants={textVariants}>Tech Stack</motion.h2>
        <motion.hr variants={textVariants} />
        <motion.div className="tech-list" variants={textVariants}>
          <motion.div className="tech-card" variants={textVariants}>
            <h3>Frontend</h3>
            <div className="tech-items">
              {["HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "React", "Next.js"].map((tech) => (
                <motion.div className="tech" key={tech} variants={textVariants}>
                  <h3>{tech}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="tech-card" variants={textVariants}>
            <h3>Backend</h3>
            <div className="tech-items">
              {["PHP", "Node.js", "Express.js", "MySQL", "Firebase"].map((tech) => (
                <motion.div className="tech" key={tech} variants={textVariants}>
                  <h3>{tech}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="tech-card" variants={textVariants}>
            <h3>Others</h3>
            <div className="tech-items">
              {["C", "C++", "Java", "Python", "Git", "Vercel"].map((tech) => (
                <motion.div className="tech" key={tech} variants={textVariants}>
                  <h3>{tech}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
