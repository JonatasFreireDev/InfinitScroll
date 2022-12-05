import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

export interface ICardRoot {
  children: ReactNode;
  size?: "md" | "lg";
  appearFrom?: "appearFromLeft" | "appearFromRight";
  className?: string;
}

export function CardRoot({
  size = "md",
  appearFrom,
  className,
  children,
}: ICardRoot) {
  const ref = useRef<HTMLDivElement>(document.createElement("div"));

  const apper = {
    left: {
      initial: {
        opacity: 0,
        translateX: "-50px",
      },
      whileInView: {
        opacity: 1,
        translateX: "0px",
      },
    },
    rigth: {
      initial: {
        opacity: 0,
        translateX: "50px",
      },
      whileInView: {
        opacity: 1,
        translateX: "0px",
      },
    },
  };

  return (
    <motion.div
      initial={
        appearFrom === "appearFromLeft"
          ? apper.left.initial
          : apper.rigth.initial
      }
      whileInView={
        appearFrom === "appearFromLeft"
          ? apper.left.whileInView
          : apper.rigth.whileInView
      }
      viewport={{ once: true }}
    >
      <div
        className={`flex w-full bg-white lg:flex-col
      ${className}
      ${size === "md" ? "h-auto" : "min-h-[440px] lg:min-h-full"}
      transition-all duration-500`}
        ref={ref}
      >
        {children}
      </div>
    </motion.div>
  );
}

CardRoot.displayName = "Card.Root";
