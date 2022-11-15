const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (quote.text.length > 50) {
    quoteText.style.fontSize = '4rem';
  } else {
    quoteText.style.fontSize = '6rem';
  }
  quoteText.textContent = quote.text;
  if (quote.author === null) {
    quoteAuthor.textContent = '~ ' + 'UnKnown';
  } else {
    quoteAuthor.textContent = '~ ' + quote.author;
  }
}

newQuoteBtn.addEventListener('click', () => {
  newQuote();
});

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

getQuotes();
