import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Monaco GP Racing Tee",
      price: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop",
      color: "Black",
      size: "M",
      quantity: 2
    },
    {
      id: 3,
      name: "Speed Demon Vintage Tee",
      price: 38,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=200&h=250&fit=crop",
      color: "White",
      size: "L",
      quantity: 1
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="py-20">
          <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-black text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start your racing journey with our F1-inspired streetwear collection
            </p>
            <Link to="/categories/tees">
              <Button size="lg" className="bg-racing-red hover:bg-racing-red/90">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-foreground mb-2">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <Link to="/categories/tees">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-card border rounded-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">Items in Cart</h2>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center space-x-4 pb-6 border-b border-border last:border-b-0 last:pb-0">
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-25 object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <span>Color: {item.color}</span>
                            <span>Size: {item.size}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="font-bold text-lg">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="mb-6 p-4 bg-racing-yellow/10 border border-racing-yellow/20 rounded-lg">
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 text-racing-yellow mr-2" />
                      <span className="text-sm">
                        Add ${(75 - subtotal).toFixed(2)} more for free shipping
                      </span>
                    </div>
                  </div>
                )}

                <Button size="lg" className="w-full bg-racing-red hover:bg-racing-red/90 mb-4">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    Secure checkout powered by Stripe
                  </p>
                </div>

                {/* Features */}
                <div className="border-t border-border pt-6 mt-6">
                  <h3 className="font-semibold mb-3">Why shop with us?</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Free shipping on orders over $75</div>
                    <div>• 30-day free returns</div>
                    <div>• 2-year warranty on all products</div>
                    <div>• Racing community exclusive discounts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 2,
                  name: "Silverstone Circuit Tee",
                  price: 42,
                  image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=300&h=375&fit=crop"
                },
                {
                  id: 4,
                  name: "Racing Windbreaker",
                  price: 89,
                  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=375&fit=crop"
                },
                {
                  id: 5,
                  name: "Pit Crew Cap",
                  price: 28,
                  image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=375&fit=crop"
                },
                {
                  id: 6,
                  name: "Victory Lap Tee",
                  price: 52,
                  image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=375&fit=crop"
                }
              ].map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-lg font-bold">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
