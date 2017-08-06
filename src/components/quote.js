import React from 'react';
import 'whatwg-fetch';
import '../App.css';
import '../fonts/font-awesome.css';
import './tweet';

  
export default class Quote extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {quote: "Fetching Quotes for you...", author:null};

    }
     componentDidMount(){
        fetch('https://favqs.com/api/qotd')
        .then(response => {
            //handling http error ststuses
            if(response.status >= 200 && response.status <300){
                return response;
            }
            else{
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
        // parse json
        .then(response => response.json())
        //show data
        .then(json => {
            console.log(json);
           this.setState({quote: json.quote.body , author: json.quote.author})
        })
    }
     
    render(){   
           
        return(
            
                <div className="quote">
                <p className="comma">"</p>
                <section className="quote-text"><q>{this.state.quote}</q> 
                <p className="author">--{this.state.author}</p><button className="quote-button" 
            onClick={this.componentDidMount.bind(this)}><i className="fa fa-bolt" aria-hidden="true"></i>
            New Quote!</button>
            
</section>
     </div> 
     
     );
    }
}