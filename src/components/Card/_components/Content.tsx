export interface ICardContent {
  author: string;
  title: string;
  description: string;
  link: string;
}

export function CardContent({
  author,
  title,
  description,
  link,
}: ICardContent) {
  return (
    <section>
      <div>
        <span>{author}</span>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <div>
        <span>{author}</span>
      </div>
    </section>
  );
}

CardContent.displayName = "Card.Content";
