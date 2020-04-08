// Contains the quotes represented as an array of JSON objects
const QUOTES = [
    {   
        author: `Linus Torvalds`,
        quote: `If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program.`
    },
    {
        author: `Linus Torvalds`,
        quote: `Talk is cheap. Show me the code`
    },
    {
        author: `Albert Einstein`,
        quote: `E = mc^2`
    },
    {
        author: `Albert Einstein`,
        quote: `Man tries to make for himself in the fashion that suits him best a simplified and intelligible picture of the world; he then tries to some extent to substitute this cosmos of his for the world of experience, and thus to overcome it. This is what the painter, the poet, the speculative philosopher, and the natural scientist do, each in his own fashion.`
    },
    {
        author: `Michelangelo di Lodovico Buonarroti Simoni`,
        quote:`I was never the kind of painter or sculptor who kept a shop.`   
    },
    {
        author: `William Shakespeare`,
        quote: `To be or not to be, that is the question.`
    },
    {
        author: `William Shakespeare`,
        quote: `We have seen better days.`
    },
    {
        author: `SpongeBob SquarePants`,
        quote: `I'm ready! I'm ready! I'm ready!`
    },
    {
        author: `Jane Austen`,
        quote: `I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.`
    },
    {
        author: `Jane Austen`,
        quote: `I had a very pleasant evening, however, though you will probably find out that there was no particular reason for it; but I do not think it worth while to wait for enjoyment until there is some real opportunity for it.`
    }, 
    {
        author: `Walt Elias Disney`,
        quote: `Over at our place, we're sure of just one thing: everybody in the world was once a child.`
    },
    {
        author: `Walt Elias Disney`,
        quote: `It's kind of fun to do the impossible.`
    }, 
    {
        author: `Walt Elias Disney`,
        quote: `When we do fantasy, we must not lose sight of reality.`
    },
    {
        author: `Justin Bieber`,
        quote: `My mom is my biggest fan. She’s been a fan since I was a baby.`
    }, 
    {
        author: `Aubrey Drake Graham`,
        quote: `Don't ever forget the moment you began to doubt, transitioning from fitting in to standing out.`
    }, 
    {
        author: `Britney Jean Spears`,
        quote: `I look back and think I'm a smart person!  What the hell was I thinking?`
    }, 
    {
        author: `Bill Gates`,
        quote: `The finest pieces of software are those where one individual has a complete sense of exactly how the program works. To have that, you have to really love the program and concentrate on keeping it simple, to an incredible degree.`
    }, 
    {
        author: `Bill Gates`,
        quote: `Unfortunately, many programs are so big that there is no one individual who really knows all the pieces, and so the amount of code sharing you get isn't as great. Also, the opportunity to go back and really rewrite something isn't quite as great, because there's always a new set of features that you're adding on to the same program.`
    }, 
    {
        author: `Bill Gates`,
        quote: `The worst programs are the ones where the programmers doing the original work don't lay a solid foundation, and then they're not involved in the program in the future.`
    }, 
    {
        author: `Bill Gates`,
        quote: `Success is a lousy teacher. It seduces smart people into thinking they can't lose.`
    }
];
    
const randomQuote = () => {
    let randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
}


export { randomQuote };