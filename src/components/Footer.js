import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('div')
    footer.className = "footer-container"
    footer.innerHTML = `
      <p>HELLO WORLD SHOP.</p>
    `
    return footer
  }
}