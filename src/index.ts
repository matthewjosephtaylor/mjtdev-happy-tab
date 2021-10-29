import { randomQuote } from "./randomQuote.js";

(async () => {
  const quote = await randomQuote();
  const { credit, text } = quote;

  const creditDiv = document.querySelector(".credit");
  const textDiv = document.querySelector(".text");

  textDiv.textContent = `${text}`;
  creditDiv.innerHTML = `&mdash; ${credit}`;
})();
