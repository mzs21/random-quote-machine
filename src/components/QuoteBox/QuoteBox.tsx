import { useEffect, useState } from "react";
import { QuoteAPIData } from "../../Interface/Interface";
import QuoteAuthor from "../QuoteAuthor/QuoteAuthor";
import QuoteText from "../QuoteText/QuoteText";
import NewQuoteButton from '../Buttons/NewQuoteButton';

let QuoteBox = () => {
  const [quotes, setQuotes] = useState<QuoteAPIData[]>([]);
  const [randomQuotes, setRandomQuotes] = useState<QuoteAPIData>();

  useEffect(() => {
    let fetchData = async () => {
      const response: Response = await fetch("https://type.fit/api/quotes"); // fetching data from API
      const data = await response.json(); // converting data to JSON

      setQuotes(data);

      let randomIndex: number = Math.floor(Math.random() * data.length); // Random index of data for 'randomQuotes'

      setRandomQuotes(data[randomIndex]);
    };

    fetchData();
  }, []); // [] means that this effect will only run once || componentDidMount()

  let getNewQuote = () => {
    let randomIndex: number = Math.floor(Math.random() * quotes.length); // Random index of data for 'randomQuotes'

    setRandomQuotes(quotes[randomIndex]);
  };

  let quote = randomQuotes?.text;
  let authorName = randomQuotes?.author;

  return (
    <>
      {randomQuotes ? (
        <>
          <QuoteText text={quote} />
          <QuoteAuthor author={authorName || "No Author"} />
        </>
      ) : (
        <h2>Loading</h2>
      )}

      <NewQuoteButton newQuoteButton={getNewQuote} />
    </>
  );
};

export default QuoteBox;
