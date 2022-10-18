export interface ICardImage {
  name: string;
  src: string;
}

export function CardImage({ name, src }: ICardImage) {
  return (
    <div>
      <img src={src} alt={name} />
    </div>
  );
}

CardImage.displayName = "Card.Image";
