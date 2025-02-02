import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('div')
    header.className = "header-container"
    header.innerHTML = `
      <div>
        <h1>HELLO WORLD SHOP.</h1>
        <p>~ Simple is the best ~</p>
      </div>
      <button class="cart-toggle-btn">🛒</button>
    `
    // カートを開く処理を後から設定する
    setTimeout(() => {
      const cartOverlay = document.querySelector(".cart-overlay");
      if (!cartOverlay) {
        console.error("Error: .cart-overlay element not found!");
        return;
      }

      const toggle = header.querySelector('.cart-toggle-btn');
      if (toggle) {
        toggle.addEventListener("click", () => {
          cartOverlay.classList.add("open");
          toggle.classList.add("open")
        });
      } else {
        console.error("Error: .cart-toggle-btn element not found in header!");
      }
    }, 0); // setTimeout を使って次のイベントループで実行

    return header
  }
}