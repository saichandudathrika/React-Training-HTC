// imrc is shortcut to to import below line.
// we need to import reactive native from extensions 
import React, { Component } from 'react';

// ccc is short cut for creating class,constructor & Redux
class Book extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name:'abcd efg',
            author:'aaa',
            noOfVotes:0
     };
    }

    handleupVote=()=>{
        this.setState({noOfVotes: ++this.state.noOfVotes})
    }

    handleDownVote=()=>{
        this.setState({noOfVotes: --this.state.noOfVotes})
    }

    render() {
        return (
            <div> 
            <h1> Book Name : {this.state.name}</h1>
            <p> Author Name : {this.state.author}</p>
            {
                this.state.noOfVotes>=0?
                (<h4> Votes : {this.state.noOfVotes}</h4>):(<h4>Votes : 0</h4>)
            }
            <button onClick={this.handleupVote}>
                upVote
            </button>
            <button onClick={this.handleDownVote}>
                downVote
            </button>

            </div>
        );
    }
}

export default Book;