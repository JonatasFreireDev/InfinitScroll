import { CardContent, ICardContent } from "./Content";
import { CardImage, ICardImage } from "./Image";
import { CardRoot, ICardRoot } from "./Root";

export type { ICardContent, ICardImage, ICardRoot };

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Content: CardContent,
};
