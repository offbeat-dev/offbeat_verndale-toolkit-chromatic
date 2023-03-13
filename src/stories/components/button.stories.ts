import type { Meta, StoryObj } from "@storybook/html";
import template from "../../html/components/button.hbs";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type ButtonArgs = {
  label: string;
  type: "button" | "submit" | "link";
  className: "primary" | "secondary";
  style?: "solid" | "outline";
  size?: string;
  icon?: {
    name: string;
    viewBox: string;
  };
  disabled?: boolean;
};

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: template,
  argTypes: {
    label: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "link"],
    },
    className: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    style: {
      control: { type: "select" },
      options: ["solid", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
    disabled: { control: "boolean" },
  },
} as Meta<ButtonArgs>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
export const Default: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary",
  },
};

export const Submit: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "submit",
    className: "primary",
  },
};

export const Link: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "link",
    className: "primary",
  },
};

export const Outline: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary",
    style: "outline",
  },
};

export const WithIcon: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary",
    icon: {
      name: "file-pdf",
      viewBox: "0 0 30 30",
    },
  },
};

export const Small: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary",
    size: "small",
  },
};

export const Disabled: StoryObj<ButtonArgs> = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary",
    disabled: true,
  },
};
