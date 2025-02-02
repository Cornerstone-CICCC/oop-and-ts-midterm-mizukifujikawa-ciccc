import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    const product = document.createElement('div')
    product.className = "product-item"
    product.innerHTML = `
      <div class="image-container">
        <img src='${this.props.product.image}' />
      </div>
      <h3>${this.props.product.title}</h3>
      <p>$${parseFloat(this.props.product.price).toFixed(2)}</p>
      <button class="add-cart-btn">Add to Cart</button>
    `

    product.querySelector('.add-cart-btn').addEventListener('click', this.handleAddToCart)

    return product
  }
}