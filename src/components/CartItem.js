import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
    this.handleIncreaseItemQuantity = this.handleIncreaseItemQuantity.bind(this)
    this.handleDecreaseItemQuantity = this.handleDecreaseItemQuantity.bind(this)
  }

  handleRemoveFromCart() {
    this.props.cartContext.removeProduct(this.props.item.id)
  }

  handleIncreaseItemQuantity() {
    this.props.cartContext.updateQuantity(this.props.item.id, 1)
  }
  handleDecreaseItemQuantity() {
    this.props.cartContext.updateQuantity(this.props.item.id, -1)
  }

  render() {
    const cartItem = document.createElement('li')
    cartItem.className= 'cart-item'
    cartItem.innerHTML =`
      ${this.props.item.title}
      <div class="cart-item-buttons">
        <p>$${this.props.item.price}</p>
        <strong>x ${this.props.item.quantity}</strong>
        <button class="increase-item-btn">+</button>
        <button class="decrease-item-btn">-</button>
        <button class="remove-item-btn">Remove</button>
      </div>
    `

    cartItem.querySelector('.increase-item-btn').addEventListener('click', this.handleIncreaseItemQuantity)
    cartItem.querySelector('.decrease-item-btn').addEventListener('click', this.handleDecreaseItemQuantity)
    cartItem.querySelector('.remove-item-btn').addEventListener('click', this.handleRemoveFromCart)

    return cartItem
  }
}