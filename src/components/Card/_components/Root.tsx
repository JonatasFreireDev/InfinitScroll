import { ReactNode } from "react";

export interface ICardRoot {
  children: ReactNode;
  size?: "md" | "lg";
}

export function CardRoot({ size = "md", children }: ICardRoot) {
  return (
    <div
      className={`flex bg-white lg:flex-col ${
        size === "md"
          ? "w-[50%] max-w-[50%] h-auto"
          : "w-[75%] max-w-[75%] min-h-[640px]"
      }`}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = "Card.Root";
