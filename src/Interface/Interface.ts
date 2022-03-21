import React from "react";

export interface StyleProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  foregroundColor?: React.CSSProperties["color"];
}

export interface QuoteAPIData {
  text?: string;
  author?: string;
}

export interface ButtonProps {
  newQuoteButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
