import React, { Component } from 'react';
import { Container } from '@mui/material';
import { Navigation } from './Navigation';

export class Layout extends Component<any,any> {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Navigation />
        <br />
        <br />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}


