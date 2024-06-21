import { motion } from "framer-motion"

const Links = ({ setOpen }) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    }
  }

  const items = [
    "Home",
    "About",
    "Projects",
    "Contact",
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.div className='links' variants={variants}>{items.map(item => (
      <motion.a
        // href={`#${item}`}
        key={item}
        onClick={() => scrollToSection(item)}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {item}
      </motion.a>
    ))}</motion.div>
  )
}

export default Links