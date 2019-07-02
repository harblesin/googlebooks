import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Display from "../Components/Display";
import Title from "../Components/Title";
import Results from "../Components/Results";
import json from "../test.json";

class Search extends Component {
  state = {
    json
  };

  render() {
    return (
      <div className="App container">
        <Title />
        <Row>
          <Col width="col-12">
            <Results>
              {this.state.json.map(item => (
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
