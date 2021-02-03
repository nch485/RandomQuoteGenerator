//Quotes

const quotes = [
    {
      quote: "Self-esteem means knowing you are the dream.",
    source: 'Oprah Winfrey',
    citation: 'wikipedia',
    }, 
    {
      quote: "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.",
    source: 'Audre Lorde',
    citation: 'wikipedia',
    year: 2016,
    },
  {
      quote: "Success is liking yourself, liking what you do, and liking how you do it",
    source: 'Mya Angelou',
    citation: 'wikipedia',
    year: 2016,
    },
    {
      quote: "The most common way people give up their power is by thinking they don’t have any",
    source: 'Alice Walker',
    citation: 'wikipedia',
    year: 2016
    },
    {
      quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
      source: 'Madeleine Albright',
      citation: 'coolquotes',
      },
    {
      quote: "A girl should be two things: who and what she wants.",
        source: 'Coco Chanel'
        },
    {
      quote: "Whatever the problem, be part of the solution. Don’t just sit around raising questions and pointing out obstacles.”",
          source: 'Tina Fey',
          citation: 'twitter',
          year: 2019,
          },
    {
      quote: "I’m always perpetually out of my comfort zone.",
            source: 'Tory Burch'
            }];
            console.log(quotes);
  
  
  //getRandomQuote function
  
  function getRandomQuote () {
    console.log(quotes);
    
  //randomNumber generator
     var randomNumberGenerator = Math.floor(Math.random() * quotes.length);
    
    // Storing randomNumber in Quote Array
    var randomQuote = quotes[randomNumberGenerator];
    
    // returning random quote
    console.log(randomQuote);
    return randomQuote;
  }
  getRandomQuote();
  
  
  //printQuote function
  
  function printQuote () { 
    let quoteObject = getRandomQuote();
    let html = `
      <p class ="quote"> ${quoteObject['quote']}</p>
      <p class ="source"> ${quoteObject['source']}`;
    
    // adding citation and year
    if (quoteObject['citation']) {
        html += `<span class="citation"> ${quoteObject['citation']}</span>`;
    } if (quoteObject['year']) {
        html += `<span class ="year"> ${quoteObject['year']}</span>`;
    } if (quoteObject['tags']) {
        html += `<span class="tags"> <br> Tags: ${quoteObject['tags'].join(", ")} </span>`
    }
    html += '</p>';
  
    document.getElementById('quote-box').innerHTML = html}
   
  printQuote();
  
  
  
  
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);