import React from 'react';
import './App.css';
import Form from "./Components/Form"
import Navbar from "./Components/Navbar"
import Row from "./Components/Row"
import Col from "./Components/Col"
import Display from "./Components/Display"
import Title from "./Components/Title"
import Results from "./Components/Results"

function App() {
  return (
    <div className="App container">
        <Navbar />
        <Title />
        <Row>
          <Col width="col-12">
             <Form />
          </Col>
        </Row>
        <Row>
          <Col width="col-12">
            <Results>
              <Display />
            </Results>
          </Col>
        </Row>
        
    </div>
  );
}

export default App;
