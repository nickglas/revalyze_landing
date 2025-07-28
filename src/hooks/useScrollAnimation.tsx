import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

export const useScrollAnimation = (delay = 0) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1] as const,
    delay,
  };

  return { ref, controls, variants, transition };
};

export const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, controls, variants, transition } = useScrollAnimation(delay);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
