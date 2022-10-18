import { ReactNode } from "react";

export interface ICardRoot {
  children: ReactNode;
  size?: "md" | "lg";
}

export function CardRoot({ size = "md", children }: ICardRoot) {
  return (
    <div
      className={`flex  bg-white ${
        size === "md" ? "w-[50%]" : "w-[75%] h-[640px]"
      }`}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = "Card.Root";
