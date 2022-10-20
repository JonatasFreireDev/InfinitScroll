export interface ICardImage {
  title: string;
  imageUrl: string;
}

export function CardImage({ title, imageUrl }: ICardImage) {
  return (
    <div className={`flex h-auto bg-gray-500`}>
      <img
        className="flex max-w-full h-auto object-cover"
        src={imageUrl}
        alt={title}
      />
    </div>
  );
}

CardImage.displayName = "Card.Image";
