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
    this.setState({ query: this.value });
    API.getBooks(this.state.query).then(res =>
      this.setState({ books: res.data.items })
    );
  };

  render() {
    return (
      <div className="App container">
        <Title />
        <Row>
          <Col width="col-12">
            <Form
              value={this.state.query}
              name="query"
              onChange={this.handleInputChange}
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
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  url={item.url}
                  summary={item.summary}
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
