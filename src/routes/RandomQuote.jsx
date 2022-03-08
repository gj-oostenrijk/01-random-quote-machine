import React from 'react';
import '../App.css';

const quotes = [
    {
      text: "I know what you’re thinking, ’cause right now I’m thinking the same thing. Actually, I’ve been thinking it ever since I got here: Why oh why didn’t I take the blue pill?",
      author: "Cypher"
    },
    {
      text: "Denial is the most predictable of all human responses.",
      author: "The Architect"
    },
    {
      text: "Choice is an illusion created between those with power and those without.",
      author: "Merovingian."
    }
  ];

class RandomQuote extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
  
    updateCount() {
      if (this.state.count === quotes.length-1) {
        this.setState({
          count: 0
        });
      } else {
        this.setState((prevState, props) => {
          return { count: prevState.count + 1 }
        });
      }
    }
  
    getTweetURL(){
      return 'https://twitter.com/intent/tweet?text=' + (quotes[this.state.count].text) + ' — ' + (quotes[this.state.count].author);
    }
  
  
  
    render() {
      return (
        <div id="quote-box">
          <div id="text">{quotes[this.state.count].text}</div>
          <div id="author">— {quotes[this.state.count].author}</div>
  
          <button id="new-quote" onClick={() => this.updateCount()} >Next Quote</button>
  
          <div>
            <a id="tweet-quote" href={this.getTweetURL()} target="_blank">Tweet</a>
          </div>
        </div>
      );
    }
  
}

export default RandomQuote;