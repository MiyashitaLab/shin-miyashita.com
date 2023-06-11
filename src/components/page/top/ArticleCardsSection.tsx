import { FC, ReactElement } from "react";

import {
  CMSImage,
  WrapImageFill,
} from "@/components/feature/wrapImage/WrapImage";
import { WrapLink } from "@/components/feature/wrapLink";
import { ArticleCard } from "@/components/ui/articleCard";
import { CardsHeading } from "@/components/ui/cardsHeading";
import { PageLink } from "@/components/ui/pageLink/";

export type ArticleCardData = {
  detailHref: string;
  title: string;
  date?: Date;
  thumbnail: CMSImage;
};

export type ArticleCardsSectionProps = {
  cards: readonly ArticleCardData[];
  href: string;
  headingIcon: ReactElement;
  headingText: string;
};

export const ArticleCardsSection: FC<ArticleCardsSectionProps> = ({
  cards,
  href,
  headingIcon,
  headingText,
}) => {
  return (
    <section className={"mx-auto my-8"}>
      <CardsHeading>
        <WrapLink href={href}>
          <span className={"px-2"}>{headingIcon}</span>
          <span>{headingText}</span>
        </WrapLink>
      </CardsHeading>
      <div
        className={
          "my-6 flex flex-row gap-2 overflow-x-auto lg:grid lg:grid-cols-4"
        }
      >
        {cards.map((card) => (
          <div key={card.detailHref} className={"shrink-0 basis-60"}>
            <ArticleCard
              date={card.date}
              title={card.title}
              href={card.detailHref}
            >
              <div className={"aspect-[1.91/1] w-full"}>
                <WrapImageFill
                  src={card.thumbnail.src}
                  sizes={{
                    base: "25vw", // 1/4
                    md: "15rem", // basis-60
                  }}
                  alt={""}
                />
              </div>
            </ArticleCard>
          </div>
        ))}
      </div>
      <PageLink href={href} className={"text-center"}>
        もっと見る
      </PageLink>
    </section>
  );
};
