import { Component } from "../common/Component.js";
import { CartList } from "./CartList.js";
import { ProductList } from "./ProductList.js";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = "container"
    appContainer.innerHTML = `
      <header></header>
      <div class="wrapper">
        <main></main>
        <aside></aside>
      </div>
      <footer></footer>
    `

    const cartList = new CartList({
      cartContext: this.props.cartContext // main.jsでContextをnewしてAppに渡してる
    }).render()
    const productList = new ProductList({
      cartContext: this.props.cartContext
    })
    const header = new Header().render()
    const footer = new Footer().render()

    appContainer.querySelector('aside').appendChild(cartList)
    appContainer.querySelector('header').appendChild(header)
    appContainer.querySelector('footer').appendChild(footer)
    productList.mount(appContainer.querySelector('main'))

    return appContainer
  }
}