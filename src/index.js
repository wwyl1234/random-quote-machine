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

    componentDidMount() {
        let result = randomQuote();
        let rQuote = result.quote;
        let randomAuthor = result.author;

        this.setState({
            quote: rQuote,
            author: randomAuthor
        });
      }

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
        <div id='quote-box'>
            <p id='text'>{this.state.quote}</p>
            <p id='author'>--{this.state.author}</p>
            <button id='new-quote' onClick={this.handleNewQuote}>New quote</button>
            <a id='tweet-quote' href={url}>Tweet it!</a>
            
        </div>
        )
    }
}



ReactDOM.render(
    <RandomQuoteMachine />,
    document.getElementById('root')
);