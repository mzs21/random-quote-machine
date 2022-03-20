import { QuoteAPIData } from "../../Interface/Interface";

let QuoteText = ({ text }: QuoteAPIData) => {
  return (
    <div>
      <p>{text} </p>
    </div>
  );
};

export default QuoteText;
