import { ReactNode, useEffect, useRef, useState } from "react";

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
      className={`flex w-full bg-white lg:flex-col
      ${className}
      ${size === "md" ? "h-auto" : "min-h-[440px] lg:min-h-full"}
      transition-all duration-500 ${
        appearFrom && visible ? `animate-${appearFrom}` : ""
      } `}
      ref={ref}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = "Card.Root";
