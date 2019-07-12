import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import MyDisplay from "../Components/MyDisplay";
import Title from "../Components/Title";
import Results from "../Components/Results";
import API from "../utils/API";

class Search extends Component {
  state = {
    myBooks: [],
    id: ""
  };

  populate = () => {
    API.grabBooks()
      .then(data => {
        this.setState({ myBooks: data.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.populate();
  }

  removeBook = event => {
    
    //Grabs the ID of what is clicked, and finds the corresponding index in the search results array
    const ident = event.target.id;
    var newBook = this.state.myBooks.findIndex(function(book, i) {
      return book._id === ident;
    });

    const book = event.target.id;
    var newId = book
    this.setState({id: newId})
    const testBook = this.state.myBooks[newBook].title;
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
                  link={item.link}
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