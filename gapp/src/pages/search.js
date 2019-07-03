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
    books: []
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
        }
    );
    }
    
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
                  title={item.volumeInfo.title}
                  subtitle={item.volumeInfo.subtitle}
                  author={item.volumeInfo.author}
                  url={item.volumeInfo.imageLinks.smallThumbnail}
                  summary={item.volumeInfo.description}
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
