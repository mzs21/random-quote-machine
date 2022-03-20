import { QuoteAPIData } from "../../Interface/Interface";

let QuoteAuthor = ({ author, foregroundColor }: QuoteAPIData) => {
  return (
    <div
      className="flex justify-end mt-6 font-medium"
      style={{ color: foregroundColor }}
    >
      <p>- {author}</p>
    </div>
  );
};

export default QuoteAuthor;
