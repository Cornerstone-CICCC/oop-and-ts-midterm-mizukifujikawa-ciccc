export class CartContext {
    constructor() {
        this.cart = []
        this.listeners = []
      }

      getCart() {
        return this.cart
      }

      addProduct(product) {
        const found = this.cart.find (item => item.id === product.id);
        if (found) {
            this.updateQuantity(product.id, 1)
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            })
        }
        this.notifyListeners()
      }

      updateQuantity(id, quantity) {
        this.cart = this.cart.map(item => {
            if (item.id === id) {
                if (item.quantity + quantity >= 0) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                } else {
                    return item
                }
            } else {
                return item
            }
        })
        this.notifyListeners();
      }

      removeProduct(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.notifyListeners();
      }

      subscribe(listener) {
        this.listeners.push(listener);
      }

      notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
      }
}