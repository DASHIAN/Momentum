const quotes = [
    {
        quote: "Screamin' for me, baby. Like you gonna die",
        author : "Lady Gaga",
    },
    {
        quote: "Poison on the inside, I could be your antidote tonight",
        author: "Lady Gaga",
    },
    {
        quote: "Screamin' for me, baby. Like you gonna die",
        author : "Lady Gaga",
    },
    {
        quote: "Poison on the inside, I could be your antidote tonight",
        author: "Lady Gaga",
    },
    {
        quote: "I could play the doctor, I can cure your disease",
        author: "Lady Gaga",
    },
    {
        quote: "If you were a sinner, I could make you believe",
        author: "Lady GAga",
    },
    {
        quote: "Lay you down like one, two, three",
        author: "Lady Gaga",
    },
    {
        quote: "Eyes roll back in ecstasy",
        author: "Lady Gaga",
    },
    {
        quote: "I can smell your sickness, I can cure ya",
        author: "Lady Gaga",
    },
    {
        quote: "Cure your disease",
        author: "Lady Gaga",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuete = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuete.quote;
author.innerText = todaysQuete.author;