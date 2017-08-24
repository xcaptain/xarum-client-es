import React from 'react';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

import {
  Route,
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';

class FixedMenu extends React.Component {
  render() {
    return (
      <Menu fixed="top" size="large">
        <Container>
          <Menu.Item as={NavLink} to="/" exact={true}>Home</Menu.Item>
          <Menu.Item as={NavLink} to="/about">About</Menu.Item>
          <Menu.Item as={NavLink} to="/contact">Contact Us</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item className="item">
              <Button as="a">Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as="a" primary={true}>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {visible: false};
  }
  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div className="navbar">
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as={NavLink} to="/" exact={true}>Home</Menu.Item>
                <Menu.Item as={NavLink} to="/about">About</Menu.Item>
                <Menu.Item as={NavLink} to="/contact">Contact Us</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>Log in</Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as="h1"
                content="Imagine-a-Company"
                inverted
                style={{ fontSize: "4em", fontWeight: "normal", marginBottom: 0, marginTop: "3em" }}
              />
              <Header
                as="h2"
                content="Do whatever you want when you want to."
                inverted
                style={{ fontSize: "1.7em", fontWeight: "normal" }}
              />
              <Button primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default NavBar;
