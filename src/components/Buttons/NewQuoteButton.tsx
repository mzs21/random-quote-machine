import {
  ButtonProps,
  StyleProps
} from "../../Interface/Interface";

let Buttons = ({
  newQuoteButton,
  backgroundColor,
}: StyleProps & ButtonProps) => {
  return (
    <div className="flex justify-end self-center">
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

export default Buttons;
