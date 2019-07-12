import React, { Component } from "react";
import Form from "../Components/Form";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Display from "../Components/Display";
import Title from "../Components/Title";
import Results from "../Components/Results";
import API from "../utils/API";

class Search extends Component {
  state = {
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
