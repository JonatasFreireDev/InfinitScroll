import {
  Card as CardComponent,
  ICardContent,
  ICardImage,
  ICardRoot,
} from "../_components";

export interface ICardImgRight
  extends Omit<ICardRoot, "children">,
    ICardImage,
    ICardContent {}

export function CardImgRight({
  src,
  size,
  author,
  description,
  title,
  link,
}: ICardImgRight) {
  return (
    <CardComponent.Root size={size}>
      <CardComponent.Content
        author={author}
        description={description}
        title={title}
        link={link}
      />
      <CardComponent.Image src={src} title={title} />
    </CardComponent.Root>
  );
}
