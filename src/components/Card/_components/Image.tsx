export interface ICardImage {
  title: string;
  imageUrl: string;
}

export function CardImage({ title, imageUrl }: ICardImage) {
  return (
    <div className="flex justify-center h-auto max-w-[50%] bg-gray-500 lg:max-w-full">
      <img
        className="flex max-w-full h-auto object-cover"
        src={imageUrl}
        alt={title}
      />
    </div>
  );
}

CardImage.displayName = "Card.Image";
