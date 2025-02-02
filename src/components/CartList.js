import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.cartListElement = null
    this.totalNumberElement = null
    this.totalElement = null
  }

  updateCart(cart) {
    this.state.cart = cart
    this.cartListElement.innerHTML = ``

    this.state.cart.forEach(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })
      this.cartListElement.appendChild(cartItem.render())
    })

    // Totalの計算
    const number = this.state.cart.reduce((sum, item) => sum + item.quantity, 0)
    this.totalNumberElement.textContent = `Total number of items: ${number}`
    const total = this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    this.totalElement.textContent = `Total: $${total}`
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.className = "cart cart-overlay"
    console.log('this.state.cart', this.state.cart)
    cartElement.innerHTML = `
      <h3>Cart</h3>
      <p class="cart-total-item">Total number of items: 0</p>
      <ul class="cart-list"></ul>
      <p class="cart-total">Total price: $0</p>
      <button class="cart-close-btn">✖ close</button>
    `

    this.cartListElement = cartElement.querySelector('.cart-list')
    this.totalNumberElement = cartElement.querySelector('.cart-total-item')
    this.totalElement = cartElement.querySelector('.cart-total')

    this.state.cart.forEach(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })
      this.cartListElement.appendChild(cartItem.render())
    })

    cartElement.querySelector(".cart-close-btn").addEventListener("click", () => {
      console.log("click cart-close-btn")
      cartElement.classList.remove("open");
      document.querySelector("header button").classList.remove("open")
    });

    this.updateCart(this.state.cart);

    return cartElement
  }
}