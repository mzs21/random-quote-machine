import { StyleProps } from "../../Interface/Interface";

let NewQuoteButton = ({ newQuoteButton, backgroundColor }: StyleProps) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={newQuoteButton}
        style={{ backgroundColor: backgroundColor }}
        className="w-max h-max rounded-md text-white p-2 mt-8 "
      >
        New Quote
      </button>
    </div>
  );
};

export default NewQuoteButton;
