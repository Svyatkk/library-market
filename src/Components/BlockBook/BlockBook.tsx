import './BlockBook.css'
import { books, BooksParam } from "../../Data/book";
import BanerBookBlock from '../BanerBookBlock/BanerBookBlock';
import { Children, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useCart } from '../../Data/CartContext';

type BlockBookProps = {
    book: BooksParam;
    childrenBaner?: ReactNode
}
type BookToKorzyna = {
    bookToKorzyna?: [BooksParam] | undefined
}


export default function BlockBook({ book, childrenBaner }: BlockBookProps) {

    const [addKorzyna, setKorzyna] = useState(0)


    function addCount() {
        setKorzyna(addKorzyna + 1)
    }

    const { addToCart } = useCart();

    return (
        <>
            <div

                className='block'>
                <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                    <div className='baner'>
                        {childrenBaner}
                    </div>

                    <p className='author_block'>{book.author}</p>
                    <h1 className='name_block'>{book.name}</h1>
                    <h3 className='price_block'>{book.price} грн</h3>

                    <div className='showKorzyna'>
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                addCount();
                                addToCart(book);

                            }}
                            className='addKorzyna'>
                        </div>
                        <div className='addFavourite'>
                            {addKorzyna}
                        </div>

                    </div>

                    <div className='background_img'>
                        <img src={book.imgHref} alt={book.name} />
                    </div>
                </Link >

            </div >


        </>

    )
}
