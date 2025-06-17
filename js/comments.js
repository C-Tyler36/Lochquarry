const generateQuote = function() {
    const quotes = [
    {
        quote: "We had a great time and loved all the different activities that we did.",
        author: "- 8th Gourock Guides"
    },
    {
        quote: "The Scouts loved every second of it, especially the powerboating.",
        author: "- Martin Bainbridge, Scout Leader"
    },
    {
        quote: "I would definitely come back.",
        author: "- Kelly, aged 9"
    },
    {
        quote: "Thank you to all the staff who worked so hard, in awful weather, to make sure that all the pupils had an amazing experience.",
        author: "- Mrs Kahn, Hillend Primary School"
    },
    {
        quote: "Five stars, it was great.",
        author: "- Joe, aged 14"
    },
    {
        quote: "I was really scared about the abseiling but the instructor Mike was really encouraging and helped me do it, thanks Mike.",
        author: "- Sophie, aged 10"
    },
    {
        quote: "The archery was brilliant, but not as good as axe throwing, I never thought we'd be allowed to do that! I got one of my axes right in the middle of the target.",
        author: "- Scott, aged 13"
    },
    {
        quote: "The kids had a ball and didn't want to leave.",
        author: "- Mr Evans, PE teacher"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.addEventListener("load", generateQuote);
