export interface ICardImage {
  title: string;
  src: string;
}

export function CardImage({ title, src }: ICardImage) {
  return (
    <div className={`flex h-auto bg-gray-500`}>
      <img className="flex max-w-full h-auto" src={src} alt={title} />
    </div>
  );
}

CardImage.displayName = "Card.Image";
