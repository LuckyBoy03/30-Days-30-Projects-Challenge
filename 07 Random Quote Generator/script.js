//get the elements from the DOM
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

//Array of the quotes
const quote = [
    {
        text: "The only way to do the great work is to love what you do",
        author: "Steve Jobs"
    },

    {
        text: "Ask yourself the secret of your success. Listen to your answer, and practice it.",
        author: "Richard Bach"

    },

    {
        text: "Let us always meet each other with smile, for the smile is the beginning of love.",
        author: "Mother Teresa"
    },

    {
        text: "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.",
        author: "Eckhart Tolle"
    },

    {
        text: "Think as a wise man but communicate in the language of the people.",
        author: "William Yeats"
    },

    {
        text: "Stay committed to your decisions, but stay flexible in your approach.  ",
        author: "Tony Robbins"
    },

    {
        text: "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
        author: "Byron Pulsifer"
    },

    {
        text: "It is better to understand a little than to misunderstand a lot. ",
        author: "Anatole France"
    },

    {
        text: "There is no great genius without some touch of madness. ",
        author: "Seneca"
    },

    {
        text: "As long as your going to be thinking anyway, think big.  ",
        author: "Donald Trump"
    }
    
];

//generate the random quotes
function getRandomQuote() {
    return quote[Math.floor(Math.random()*quote.length)];
}

// Update and display quote and author
function displayQuote(){
    const {text, author} = getRandomQuote();
    quoteText.textContent = text;
    quoteAuthor.textContent = author;
}

//Tweet the current quote
function tweetQuote(){
    const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
    const tweetUrl=`https://twitter.com/intent/tweet?text=$(encodeURIComponent(tweerText))`
    window.open(tweetUrl);
}

//event listeners
newQuoteButton.addEventListener("click", displayQuote);
tweetButton.addEventListener("click", tweetQuote);

//initial quote display
displayQuote();