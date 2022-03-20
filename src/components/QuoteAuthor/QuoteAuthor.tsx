import { QuoteAPIData } from "../../Interface/Interface";

let QuoteAuthor = ({ author }: QuoteAPIData) => {
  return (
    <div>
      <p>{author}</p>
    </div>
  );
};

export default QuoteAuthor;
