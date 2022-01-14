const quotes = [
    {
        quote: "We will find a way, we always have.",
        author: "Interstella"
    },
    {
        quote: "Nothing is permanent in this wicked world - not even our troubles.",
        author: "Charlie Chaplin"
    },
    {
        quote: "You may delay, but time will not.",
        author: "Benjamin Franklin"
    }
]


const txtQuote = document.querySelector("#quote span:first-child");
const txtAuthor = document.querySelector("#quote span:last-child");
const txtTodaysQuote = quotes[Math.floor(Math.random()*(quotes.length))];

txtQuote.innerText = txtTodaysQuote.quote;
txtAuthor.innerText = txtTodaysQuote.author;

console.log(txtTodaysQuote.quote);


// Math.random // 10까지 랜덤
// Math.ceil() // 무조건 올림
// Math.floor(1.99999) => 1 무조건 뒤를 잘라준다.