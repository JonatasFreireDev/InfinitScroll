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
  id,
  imageUrl,
  size,
  author,
  appearFrom,
  article,
  title,
}: ICardImgRight) {
  return (
    <CardComponent.Root size={size} appearFrom={appearFrom}>
      <CardComponent.Content
        id={id}
        author={author}
        article={article}
        title={title}
      />
      <CardComponent.Image imageUrl={imageUrl} title={title} />
    </CardComponent.Root>
  );
}
