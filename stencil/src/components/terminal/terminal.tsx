import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'my-terminal',
  styleUrl: 'terminal.scss',
  shadow: true
})
export class MyTerminal implements ComponentInterface {
  render() {
    return <slot />;
  }
}
