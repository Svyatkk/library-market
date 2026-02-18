import { BooksParam } from "../../Data/book"
import { books } from "../../Data/book"
import { useCart } from "../../Data/CartContext"
import './ShowBlockBookKorzyna.css'

type Props = {
    book: BooksParam
}

export default function ShowBlockBookKorzyna({ book }: Props) {

    const { removeFromCart } = useCart()
    const { cart } = useCart()
    const { addToCart } = useCart()

    return (
        <>
            <div className="sectionKorz">

                <div className="korz">
                    <div className="backgroundImgBook" style={{ backgroundColor: `${book.backgroundImgBook}` }}>
                        <div className="imgKorz">
                        </div>
                    </div>
                    <div >
                        <p style={{ color: "lightgray" }}>
                            {book.author}
                        </p>
                        <p>
                            {book.name}
                        </p>

                        <p>
                            {book.price}
                        </p>
                    </div>

                </div>


                <div >
                    <span
                        onClick={() => removeFromCart(book.id)}
                        className='deleteBookFromKorzyna'
                    >
                        X
                    </span>
                    <div className="addANDdelete">
                        <button
                            onClick={() => {
                                removeFromCart(book.id)
                            }}
                        >-</button>
                        {book.amountInKorzyna}

                        <button onClick={() => {
                            addToCart(book)
                        }}>+</button>

                    </div>
                </div>

            </div >

            <hr style={{ height: "1px", backgroundColor: "gray", border: "none", width: "98%" }} />

        </>
    )
}