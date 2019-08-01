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

  //Simple form input function
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //On clicking submit, saves the contents of the state into the db
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

    //Using the id of the book clickd to find the rest of its information
    //in the array using its index
    const ident = event.target.id;
    var newBook = this.state.books.findIndex(function(book, i) {
      return book.id === ident;
    });

    
    //Saves the book information into the db using the API utils
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
