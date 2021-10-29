import { Quote } from "./Quote.js";

export const randomQuote = async (): Promise<Quote> => {
  const quotesString = await (await fetch("asset/quotes.csv")).text();

  // hacky csv parser FTW
  const quotes: Quote[] = quotesString
    .split("\n")
    .slice(1)
    .map((line) => {
      const [credit, text] = line.split(/","/);
      return {
        credit: credit.replace('"', ""),
        text: text.replace('"', ""),
      };
    });

  return quotes[Math.floor(Math.random() * quotes.length)];
};
