import {
  Card as CardComponent,
  ICardContent,
  ICardImage,
  ICardRoot,
} from "../_components";

export interface ICard
  extends Omit<ICardRoot, "children">,
    ICardImage,
    ICardContent {}

export function Card({ src, size, author, description, title, link }: ICard) {
  return (
    <CardComponent.Root size={size}>
      <CardComponent.Image src={src} title={title} />
      <CardComponent.Content
        author={author}
        description={description}
        title={title}
        link={link}
      />
    </CardComponent.Root>
  );
}
