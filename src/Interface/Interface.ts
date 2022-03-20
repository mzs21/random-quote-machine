import React from "react";

export interface StyleProps {
  newQuoteButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  foregroundColor?: React.CSSProperties["color"];
}

export interface QuoteAPIData extends StyleProps {
  text?: string;
  author?: string;
}