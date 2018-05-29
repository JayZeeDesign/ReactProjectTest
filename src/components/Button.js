import React, { Component } from 'react';
import styled from 'styled-components'

const buttonColor = '#2BB98C';
const dangerButtonColor = 'red';
const buttonHoverColor = '#21906d'
const dangerButtonHoverColor = '#D0021B';

const Button = styled.button`
    color: #fff;
    background-color: ${dangerButtonColor}
    border-color: ${dangerButtonColor}
    display: inline-block;
    font-weight: normal;
    font-size: 3rem;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 1rem 3rem;
    border: 1px solid transparent;
    border-radius: 0.3rem;

    &:hover {
      background-color: ${dangerButtonHoverColor}
      border-color: ${dangerButtonHoverColor}
    }
`;

export default class extends Component {
  render() {
    return <Button color={this.props.type}>{this.props.children}</Button>
  }
}