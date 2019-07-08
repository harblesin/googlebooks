import React, { Component } from "react";
import Form from "../Components/Form";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Display from "../Components/Display";
import Title from "../Components/Title";
import Results from "../Components/Results";
import json from "../test.json";
import API from "../utils/API";

class Search extends Component {
  state = {
    json,
    query: "",
    books: [],
    myBooks: [],
    id: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      this.setState({ books: [] });
      this.setState({ query: this.value });
      API.getBooks(this.state.query).then(res => {
        let returning = res.data.items;
        this.setState({ books: returning });
      });
    }
  };

  saveBook = event => {
    event.preventDefault();

    const ident = event.target.id;
    var newBook = this.state.books.findIndex(function(book, i) {
      return book.id === ident;
    });

    API.saveBook({
      title: this.state.books[newBook].volumeInfo.title,
      subtitle: this.state.books[newBook].volumeInfo.subtitle,
      author: this.state.books[newBook].volumeInfo.authors,
      url: this.state.books[newBook].volumeInfo.imageLinks.smallThumbnail,
      summary: this.state.books[newBook].volumeInfo.description,
      image: this.state.books[newBook].volumeInfo.imageLinks.smallThumbnail,
      link: this.state.books[newBook].volumeInfo.infoLink
    })
      .then(() => console.log("saved"))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App container">
        <Title />
        <Row>
          <Col width="col-12">
            <Form
              value={this.state.query}
              onChange={this.handleInputChange}
              name="query"
              placeholder="  Search for books!"
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col width="col-12">
            <Results>
              {this.state.books.map(item => (
                 (item.volumeInfo.imageLinks) ?
                <Display
                  key={item.id}
                  id={item.id}
                  name="id"
                  title={item.volumeInfo.title}
                  subtitle={item.volumeInfo.subtitle}
                  author={item.volumeInfo.authors.map(name=> name + "  ")}
                  url={item.volumeInfo.imageLinks.smallThumbnail}
                  link={item.volumeInfo.infoLink}
                  summary={item.volumeInfo.description}
                  saveBook={this.saveBook}
                /> :
                <Display
                  key={item.id}
                  id={item.id}
                  name="id"
                  title={item.volumeInfo.title}
                  subtitle={item.volumeInfo.subtitle}
                  author={item.volumeInfo.authors}
                  url="data:image/jpeg;base64,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"
                  link={item.volumeInfo.infoLink}
                  summary={item.volumeInfo.description}
                  saveBook={this.saveBook}
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
