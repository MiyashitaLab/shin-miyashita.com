import classNames from "classnames";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { WrapImageInline } from "@/components/feature/wrapImage/WrapImage";
import { WrapLink } from "@/components/feature/wrapLink";
import { wrapImageUrl } from "@/models/transformer/transformCMSImage";

export type MarkdownContentProps = {
  markdown: string;
};

const listPaddingName = (depth: number) => {
  switch (depth) {
    case 1:
      return "pl-4" as const;
    case 2:
      return "pl-8" as const;
    case 3:
      return "pl-12" as const;
    case 4:
    default:
      return "pl-16" as const;
  }
};

export const MarkdownContent: FC<MarkdownContentProps> = ({ markdown }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className={"text-4xl"}>{children}</h1>,
        h2: ({ children }) => <h2 className={"text-3xl"}>{children}</h2>,
        h3: ({ children }) => <h3 className={"text-2xl"}>{children}</h3>,
        h4: ({ children }) => <h4 className={"text-xl"}>{children}</h4>,
        p: ({ children }) => <p className={"my-2 text-base"}>{children}</p>,
        strong: ({ children }) => (
          <strong className={"font-bold"}>{children}</strong>
        ),
        em: ({ children }) => (
          <em
            className={
              "italic peer-data-[label=img-container]:block peer-data-[label=img-container]:text-center peer-data-[label=img-container]:text-sm"
            }
          >
            {children}
          </em>
        ),
        u: ({ children }) => <u className={"underline"}>{children}</u>,
        s: ({ children }) => (
          <s className={"line-through decoration-2"}>{children}</s>
        ),
        a: ({ children, href }) => (
          <WrapLink href={href} className={"text-blue-500"}>
            {children}
          </WrapLink>
        ),
        code: ({ children }) => (
          <code className={"rounded-md bg-gray-200 box-decoration-clone p-1"}>
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className={"my-4 rounded-md bg-gray-200 p-2"}>{children}</pre>
        ),
        blockquote: ({ children }) => (
          <blockquote
            className={
              "my-2 border-l-4 border-gray-300 bg-gray-100 py-1 pl-2 italic"
            }
          >
            {children}
          </blockquote>
        ),
        ul: ({ depth, children }) => {
          if (depth === 0) {
            return <ul className={"my-4 list-disc"}>{children}</ul>;
          } else {
            return (
              <ul className={classNames("list-disc", listPaddingName(depth))}>
                {children}
              </ul>
            );
          }
        },
        ol: ({ depth, children }) => {
          if (depth === 0) {
            return <ul className={"my-4 list-decimal"}>{children}</ul>;
          } else {
            return (
              <ul
                className={classNames("list-decimal", listPaddingName(depth))}
              >
                {children}
              </ul>
            );
          }
        },
        li: ({ children }) => <li className={"list-inside"}>{children}</li>,
        table: ({ children }) => (
          <div className={"mb-2 mt-4 overflow-x-auto pb-2"}>
            <table className={"text-left text-sm"}>{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className={"bg-gray-100"}>{children}</thead>
        ),
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => <tr>{children}</tr>,
        th: ({ children }) => (
          <th className={"border border-gray-300 px-2 py-1"}>{children}</th>
        ),
        td: ({ children }) => (
          <td className={"border border-gray-300 px-2 py-1"}>{children}</td>
        ),
        hr: ({ children }) => (
          <hr className={"my-4 border-gray-300"}>{children}</hr>
        ),
        img: ({ src, alt = "" }) => (
          <span
            className={"peer relative my-2 block h-60 max-w-full"}
            data-label={"img-container"}
          >
            <WrapImageInline
              src={wrapImageUrl(src!)}
              alt={alt}
              sizes={{
                base: "15rem", //h-60
              }}
              sizesFlow={"height"}
            />
          </span>
        ),
        iframe: ({ node, ...props }) => {
          return (
            <div className={"flex justify-center"}>
              <iframe {...props} />
            </div>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
