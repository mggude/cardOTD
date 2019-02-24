import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from "reactstrap";
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";


const styles = {
  image: {
    height: 550
  }
}

class App extends Component {
  state = {
    cards,
    selectedCard: {},
    image: "",
    button: "Draw Your Card"
  }

  componentDidMount() {
    this.setState({
      image: require("./images/static.png")
    });
  }

  handleButtonClick = () => {
    var card = cards[Math.floor(Math.random() * cards.length)];
    console.log(card)
    this.setState({
      selectedCard: card,
      image: require("./images/" + card.image),
      button: "Draw a New Card"
    });
  };

  render() {
    return (
      <>
        
          <Jumbotron />
          <Container>
            <Row>
              <Col className="text-center">
                {/* <Button className="drawBtn" color="danger" onClick={this.handleButtonClick}><span>{this.state.button}</span></Button> */}
              </Col>
            </Row>
            <Row>
              <Col lg="offset-2">
                <img
                  src={(this.state.image)}
                  alt={(this.state.selectedCard.name_short)}
                  style={styles.image}
                  onClick={this.handleButtonClick} />
              </Col>
              <Col>
                <Wrapper>
                  <Card
                    key={this.state.selectedCard.name_short}
                    id={this.state.selectedCard.name_short}
                    name={this.state.selectedCard.name}
                    meaning={this.state.selectedCard.meaning_up}
                    desc={this.state.selectedCard.desc}
                  />
                </Wrapper>
              </Col>
            </Row>
          </Container>
          <Footer />
      </>
    );
  }
}

export default App;
