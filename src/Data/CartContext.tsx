import { BooksParam } from "./book";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


type CartContextType = {
    cart: BooksParam[];
    finalPrice: number;
    addToCart: (book: BooksParam) => void;
    removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null)


export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<BooksParam[]>([]);
    const [finalPrice, setfinalPrice] = useState(0);


    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + (item.price * item.amountInKorzyna), 0);
        setfinalPrice(total);
    }, [cart]);

    const addToCart = (book: BooksParam) => {
        setCart(prevCart => {
            const existingBook = prevCart.find(item => item.id === book.id);

            if (existingBook) {
                return prevCart.map(item =>
                    item.id === book.id
                        ? { ...item, amountInKorzyna: item.amountInKorzyna + 1 }
                        : item
                );
            }

            return [...prevCart, { ...book, amountInKorzyna: 1 }];
        });
    };


    const removeFromCart = (id: number) => {
        setCart(prevCart =>
            prevCart
                .map(item =>
                    item.id === id
                        ? { ...item, amountInKorzyna: item.amountInKorzyna - 1 }
                        : item
                )
                .filter(item => item.amountInKorzyna > 0)
        );
    };


    return (
        <CartContext.Provider value={{ cart, finalPrice, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

}



export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }
    return context;
}