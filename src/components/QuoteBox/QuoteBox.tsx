import { useEffect, useState } from "react";
import { QuoteAPIData } from "../../Interface/Interface";
import Buttons from "../Buttons/NewQuoteButton";
import Footer from "../Footer/Footer";
import QuoteAuthor from "../QuoteAuthor/QuoteAuthor";
import QuoteText from "../QuoteText/QuoteText";

let QuoteBox = () => {
  const [quotes, setQuotes] = useState<QuoteAPIData[]>([]);
  const [randomQuotes, setRandomQuotes] = useState<QuoteAPIData>();
  const [color, setColor] = useState<string>("black");

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

    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#bbaeb0",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let randomColorIndex: number = Math.floor(Math.random() * colors.length);

    setColor(colors[randomColorIndex]);
  };

  let quote = randomQuotes?.text;
  let authorName = randomQuotes?.author;

  return (
    <div
      style={{ backgroundColor: color }}
      className="grid place-items-center h-screen"
    >
      <div className="mt-10 mx-10 mb-0 rounded-lg p-10 bg-white">
        {randomQuotes ? (
          <>
            <QuoteText text={quote} foregroundColor={color} />
            <QuoteAuthor
              author={authorName || "No Author"}
              foregroundColor={color}
            />
          </>
        ) : (
          <p className="underline decoration-blue-600 decoration-wavy text-4xl text-sky-600 lg:text-9xl md:text-6xl">
            Loading
          </p>
        )}
        <Buttons newQuoteButton={getNewQuote} backgroundColor={color} />
        <Footer />
      </div>
    </div>
  );
};

export default QuoteBox;
