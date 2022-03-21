import { QuoteAPIData, StyleProps } from "../../Interface/Interface";

let QuoteText = ({ text, foregroundColor}: (QuoteAPIData & StyleProps)) => {
  return (
    <div
      className="text-center font-black font-sans"
      style={{ color: foregroundColor }}
    >
      <span className="text-xl">"</span>
      <span>{text} </span>
    </div>
  );
};

export default QuoteText;
