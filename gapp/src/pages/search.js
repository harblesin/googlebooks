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
    console.log("working");
    console.log(this.state.query)
    if(this.state.query){
        this.setState({books: []})
        this.setState({ query: this.value });
        API.getBooks(this.state.query).then(res =>
        { let returning = res.data.items
            console.log(returning)
      this.setState({ books: returning })
        });
    }};

    saveBook = event => {
        event.preventDefault();
        const { name, id } = event.target;
        //this.setState({id: ""})
        this.setState({
            [name]: id
        })
        console.log(this.state.id)
        API.saveBook(this.state.books, ).then(res =>
            console.log("book saved")
            //this.setState({myBooks: res})
            )
    }

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
                // (item.volumeInfo.imageLinks === undefined) ?
                <Display
                  key={item.id}
                  id={item.id}
                  name="id"
                  title={item.volumeInfo.title}
                  subtitle={item.volumeInfo.subtitle}
                  author={item.volumeInfo.author}
                  url={item.volumeInfo.imageLinks.smallThumbnail}
                  summary={item.volumeInfo.description}
                  saveBook={this.saveBook}
                 /> 
                // <Display
                //   key={item.id}
                //   id={item.id}
                //   title={item.volumeInfo.title}
                //   subtitle={item.volumeInfo.subtitle}
                //   author={item.volumeInfo.author}
                //   url="https://parker.stanford.edu/assets/default-square-thumbnail-book-large-17ef15e352d894eddd381eb90f648c0880ca1b50505fc9d1e25e53d17a9cc32a.png"
                //   summary={item.volumeInfo.description}
                //   saveBook={this.saveBook}
                // />
              ))}
            </Results>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
