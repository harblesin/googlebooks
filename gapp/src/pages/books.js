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
      return book.id === ident;
    });


    // const book = event.target.id;
    // var newId = book
    // this.setState({id: newId})
    //console.log(book);
    console.log(event.target.id);
    console.log(this.state.id);
    console.log(newBook)
    API.deleteBook({ id: this.state.myBooks[newBook].id }).then(() => {
      this.populate();
    });
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
                  id={item.id}
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