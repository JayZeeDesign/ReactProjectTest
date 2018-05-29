import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Button from './components/Button'
import Onboarding from './components/Onboarding'
import smartScanGif from './assets/smart scan_new.gif'

class App extends Component {    
  constructor(props) {
    super(props);

    const onBoarding1 = {
      title: 'Start',
      content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
      footer: <Button onClick={this.nextOnboarding}>Learn more</Button>
    }

    const onBoarding2 = {
      title: 'Learn more',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      footer: <div><Button>Previous</Button><Button onClick={this.nextOnboarding}>Next</Button></div>
    }

    const onBoarding3 = {
      title: 'Finally',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      footer: <Button onClick={this.closeOnboarding}>Got it</Button>
    }

    onBoarding1.next = onBoarding2;
    onBoarding2.next = onBoarding3;
    onBoarding3.previous = onBoarding2;
    onBoarding2.previous = onBoarding1;

    this.state = { currentOnboarding: undefined };
    this.initialOnboarding = onBoarding1;
  }

  startOnboarding = () => {
    this.setState({ currentOnboarding: this.initialOnboarding});
  }

  nextOnboarding = () => {
    const {currentOnboarding} = this.state;

    this.setState({currentOnboarding: currentOnboarding.next})
  }

  previousOnboarding = () => {
    const {currentOnboarding} = this.state;

    this.setState({currentOnboarding: currentOnboarding.previous})
  }

  closeOnboarding = () => {
    this.setState({currentOnboarding: undefined});
  }

  onClick = () => {
    window.alert("hahidohaodaw");
  }

  render() {
    const {currentOnboarding} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {currentOnboarding && <Onboarding
          title={currentOnboarding.title}
          content={currentOnboarding.content}
          footer={currentOnboarding.footer} />}
        {!currentOnboarding && <p className="App-intro">
          <Button type='danger' onClick={this.startOnboarding}> How dare you start tutorial</Button>
        </p>}
        <div width="2000px" background="#F8F6F8">
          <img src={smartScanGif} />
        </div>        
      </div>
    );
  }
}

export default App;
