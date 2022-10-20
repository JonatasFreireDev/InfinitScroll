import { ReactNode, useEffect, useRef, useState } from "react";

export interface ICardRoot {
  children: ReactNode;
  size?: "md" | "lg";
  appearFrom?: "appearFromLeft" | "appearFromRight";
}

export function CardRoot({ size = "md", appearFrom, children }: ICardRoot) {
  const ref = useRef<HTMLDivElement>(document.createElement("div"));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) setVisible(true);
      },
      { threshold: 0, rootMargin: "-150px" }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className={`flex bg-white lg:flex-col ${
        size === "md"
          ? "w-[50%] max-w-[50%] h-auto"
          : "w-[75%] max-w-[75%] min-h-[640px]"
      }
      transition-all duration-500 ${
        appearFrom && visible ? `animate-${appearFrom}` : ""
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = "Card.Root";
