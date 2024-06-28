import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "GearGrove",
    img: "https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "An innovative e-commerce platform for motorcycle enthusiasts. Explore a wide range of gears and accessories tailored to your riding needs.",
    link: "https://geargrove.vercel.app/",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A modern, high-performance blog built with Next.js. Featuring dynamic content, SEO optimization, and a sleek, responsive design.",
    link: "https://geargrove.vercel.app/",
  },
  {
    id: 3,
    title: "Disney+ Clone App",
    img: "https://images.pexels.com/photos/9646286/pexels-photo-9646286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A fully functional clone of Disney+, showcasing popular movies and series. Experience seamless streaming with an intuitive UI.",
    link: "https://geargrove.vercel.app/",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/3194469/pexels-photo-3194469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A cutting-edge music app that lets you stream your favorite tracks, create playlists, and discover new artists. Enjoy music on the go.",
    link: "https://geargrove.vercel.app/",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;