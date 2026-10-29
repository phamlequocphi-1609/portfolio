import React from "react";
import { forwardRef } from "react";
import { TYPOGRAPHY_VARIANTS } from "./typography-variant";

interface TypographyProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  style?: React.CSSProperties;
  variant?: keyof typeof TYPOGRAPHY_VARIANTS;
}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      children,
      className = "",
      text,
      tag = "p",
      style,
      variant = "caption_12_400",
    },
    ref,
  ) => {
    const Tag = tag;
    return (
      <Tag
        ref={ref}
        className={`${className} ${TYPOGRAPHY_VARIANTS[variant]}`.trim()}
        style={style}
      >
        {text ?? children}
      </Tag>
    );
  },
);

Typography.displayName = "Typography";
export default Typography;
