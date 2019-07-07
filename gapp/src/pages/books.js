import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import MyDisplay from "../Components/MyDisplay";
import Title from "../Components/Title";
import Results from "../Components/Results";
import json from "../test.json";
import API from "../utils/API";

class Search extends Component {
  state = {
    json,
    myBooks: [],
    id: ""
  };

  populate = () => {
    API.grabBooks()
      .then(data => {
        console.log(data);
        this.setState({ myBooks: data.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log("mounted");
    this.populate();
  }

  removeBook = event => {
    // console.log("deleted")
    const ident = event.target.id;
    var newBook = this.state.myBooks.findIndex(function(book, i) {
        console.log(book)
      return book._id === ident;
    });



    // this.setState({myBooks: this.state.myBooks.filter(book => this.state.myBooks.indexOf(book) !== newBook )})
    const book = event.target.id;
    var newId = book
    this.setState({id: newId})
    console.log(book);
    console.log(this.state.myBooks[newBook].title);
    console.log(newBook)
    const testBook = this.state.myBooks[newBook].title;
    console.log(testBook)
    API.deleteBook(testBook).then(() => {
      this.populate();
    });
    this.populate();
  };

  render() {
    return (
      <div className="App container">
        <Title />
        <Row>
          <Col width="col-12">
            <Results>
              {this.state.myBooks.map((item, index) => (
                <MyDisplay
                  key={index}
                  id={item._id}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  url={item.url}
                  summary={item.summary}
                  removeBook={this.removeBook}
                />
              ))}
            </Results>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;