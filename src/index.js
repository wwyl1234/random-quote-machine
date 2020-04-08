import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {randomQuote} from './quotes.js';

class RandomQuoteMachine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    // Loads a random quote when component is mounted
    componentDidMount() {
        let result = randomQuote();
        let rQuote = result.quote;
        let randomAuthor = result.author;

        this.setState({
            quote: rQuote,
            author: randomAuthor
        });
      }

    // Gets a new random quote  
    handleNewQuote(event){
        let result = randomQuote();
        let rQuote = result.quote;
        let randomAuthor = result.author;

        this.setState({
            quote: rQuote,
            author: randomAuthor
            }
        );
    }

    render() {
        let url = `https://twitter.com/intent/tweet?&text=${this.state.quote} --${this.state.author}`;
        return (
            <div id='quote-box' class='container-fluid'>
                <div class='row'>
                    <div class='col'>
                        <p id='text'>{this.state.quote}</p>
                    </div>
                </div>
                <div class='row'>
                    <div class='col'>
                    <p id='author'>--{this.state.author}</p>
                    </div>
                </div>
                <div class='row'>
                    <div class='col'>  
                    <button type='button' class='btn btn-primary' id='new-quote' onClick={this.handleNewQuote}>
                        New quote
                    </button>
                    </div>
                    <div class='col'>
                        <a id='tweet-quote' href={url} target='_blank'rel="noopener noreferrer">Tweet it!</a>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <RandomQuoteMachine />,
    document.getElementById('root')
);