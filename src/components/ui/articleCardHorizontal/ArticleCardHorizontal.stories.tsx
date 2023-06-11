import { StoryObj } from "@storybook/react";
import Image from "next/image";

import { ArticleCardHorizontal } from "./ArticleCardHorizontal";

import { ArticleCardDescription } from "@/components/ui/articleCardDescription";
import { Icon } from "@/components/ui/icon";
import { Label } from "@/components/ui/label";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ArticleCardHorizontal> = {
  title: "ArticleCardHorizontal",
  component: ArticleCardHorizontal,
};

export default meta;

type Story = StoryObj<typeof ArticleCardHorizontal>;

export const Primary: Story = {
  args: {
    date: new Date("2021-12-31"),
    href: "#",
    children: (
      <>
        <div
          className={"relative flex h-full w-full items-center justify-center"}
        >
          <Image
            src={"./card-default.png"}
            alt={""}
            fill
            sizes={"100vw"}
            className={"object-contain"}
          />
        </div>
      </>
    ),
    title: "Open-TTTV:調理家電に調味機構を付加するオープンソースハードウェア",
    label: <Label className={"bg-cyan-700"}>研究報告</Label>,
    description: (
      <ArticleCardDescription
        items={[
          {
            icon: <Icon fontStyle={"solid"} name={"user"} />,
            text: "Alice / Bob / Carol",
          },
          {
            icon: <Icon fontStyle={"solid"} name={"book"} />,
            text: "なんとか処理学会",
          },
        ]}
      />
    ),
  },
  render: (args) => (
    <div className={"max-h-40 w-full"}>
      <ArticleCardHorizontal {...args} />
    </div>
  ),
};
