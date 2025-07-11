"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Blog } from "../libs/api/generated";
import { useState, Suspense } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const ArticleCardContent = ({ blog }: { blog: Blog }) => {
  if (!blog.photo?.url || !blog.title || !blog.id) {
    throw new Error("必要なデータが不足しています");
  }

  return (
    <Link href={`/blog/${blog.id}`}>
      <Card className="flex w-full flex-col border-0 pt-0 md:h-[350px]">
        <AspectRatio ratio={16 / 9} className="relative">
          <Image
            src={blog.photo.url}
            alt={blog.title}
            className="h-full w-full rounded-t-xl object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
        <CardHeader className="flex-1">
          <CardTitle className="line-clamp-2 leading-7">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {blog.category && blog.category.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.category.map((category) => (
                <Badge key={category.id} variant="default">
                  # {category.name}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

const ArticleCard = (props: { blog: Blog }) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticleCardContent blog={props.blog} />
    </Suspense>
  );
};

export default ArticleCard;
