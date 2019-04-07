import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import './App.css';
import logo from './assets/images/geoinquietos.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { time: Date.now() };
  }

  componentDidMount() {
    const { i18n } = this.props;
    const languages = ['ar','arn','cn','en','es','fr','ge','it','jp','pt','quz','ru','sw','gn'];
    this.interval = setInterval(() => i18n.changeLanguage(languages[Math.floor(Math.random()*languages.length)+0]), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row className="Support">
              <Col>{t('support')}</Col>
            </Row>
            <Row className='Padding-text'>
              <Col sm={4}><img src={logo} className="App-logo" alt="logo" /></Col>
              <Col sm={8} className='City-text'>
                <Row>
                  <Col className='Year text-left'>2021</Col>
                </Row>
                <Row>
                  <Col className='City text-left'>Buenos <span className='Blue'>Aires</span></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className='Footer'>#FOSS4G<span className='Yellow'>2021</span><span className='Blue'>BA</span></Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
