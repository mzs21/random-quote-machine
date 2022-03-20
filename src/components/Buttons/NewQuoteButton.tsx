
let NewQuoteButton = (
  newQuoteButton: React.MouseEventHandler<HTMLButtonElement>
) => {
  return (
    <>
      <button onClick={newQuoteButton}> New Quote </button>
    </>
  );
};

export default NewQuoteButton;
