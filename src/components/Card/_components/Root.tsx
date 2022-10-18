import { ReactNode } from "react";

export interface ICardRoot {
  children: ReactNode;
  size: "md" | "lg";
}

export function CardRoot({ size = "md", children }: ICardRoot) {
  return <div>{children}</div>;
}

CardRoot.displayName = "Card.Root";
