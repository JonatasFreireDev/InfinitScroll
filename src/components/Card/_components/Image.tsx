export interface ICardImage {
  title: string;
  src: string;
  size?: "md" | "lg";
}

export function CardImage({ title, src, size = "md" }: ICardImage) {
  return (
    <div
      className={`flex max-h-full bg-gray-500 ${
        size === "md" ? "w-[40%]" : "w-[50%]"
      }`}
    >
      <img className="flex max-w-full h-auto" src={src} alt={title} />
    </div>
  );
}

CardImage.displayName = "Card.Image";
