import { ArrowIcon } from "./ArrowIcon";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export interface ICardContent {
  id: string;
  author: string;
  title: string;
  article: string;
}

export function CardContent({ author, title, article, id }: ICardContent) {
  const reduceTitle = useMemo(() => {
    return title.substring(0, 30) + "...";
  }, []);

  const reduceArticle = useMemo(() => {
    return article?.substring(0, 100) + "...";
  }, []);

  return (
    <section className="flex h-full md:flex-col">
      <div className="flex flex-col justify-center p-8">
        <span className="font-sm text-sm text-gray-500">{author}</span>
        <h2 className="font-lg text-lg text-orange-200 py-3">{reduceTitle}</h2>
        <span className="font-sm text-sm text-gray-500">{reduceArticle}</span>
      </div>
      <div className="flex items-end p-5 md:justify-end">
        <Link to={`post/${id}`}>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

CardContent.displayName = "Card.Content";
