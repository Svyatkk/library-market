import './Nav.css'
import CatalogPanel from '../CatalogPanel/CatalogPanel'
import React, { HtmlHTMLAttributes, ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { books } from '../../Data/book'
import { useCart } from '../../Data/CartContext'
import ShowBlockBookKorzyna from '../ShowBlockBookKorzyna/ShowBlockBookKorzyna'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { title } from 'process'



export default function Nav() {


    const [save, setSave] = useState<HTMLInputElement>()

    const getitem = useRef<HTMLInputElement>(null)

    const [calac, setCalc] = useState(0)

    function change() {
        setCalc(prev => prev + 1)
    }

    const clear = () => {
        if (getitem.current) {
            getitem.current.value = ""

        }
    }

    const foucs = () => {
        if (getitem.current) {
            getitem.current.focus()

        }
    }

    function handleinput(event: React.ChangeEvent) {
        return getitem.current ? console.log(getitem.current.value) : console.log("")

    }

    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [openKorzyna, setOpenKorzyna] = useState(false)
    const { finalPrice } = useCart()
    const { cart } = useCart();


    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')


    function controlLimit(queryLimit: string) {


        return queryLimit.length < 20 ? queryLimit : alert('Задовге!!')
    }

    const showKorzyna = useCallback(() => {
        setOpenKorzyna(prev => !prev)
    }, [])

    const filteredBooks = useMemo(() => {
        return books.filter(book =>
            book.name.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase())
        );

    }, [query])



    return (
        <>
            <nav>

                <div className="logo">

                </div>
                <div style={{ backgroundColor: "pink" }}>

                </div>

                <div className="searching_block">

                    <a
                        onClick={(e) => {
                            e.preventDefault()

                            setIsOpen(true)
                        }}
                        href='#' className="button_catalog">

                        Каталог

                    </a>

                    <label htmlFor="">
                        <input className="input_search" onChange={
                            (e) => {
                                setQuery(e.target.value)
                                controlLimit(e.target.value)

                            }

                        } type="text" />
                        {query.length > 0 && (
                            <ul>{filteredBooks.map(book => (
                                <li key={book.name}>
                                    <div>
                                        <img src={book.imgHref} />
                                    </div>
                                    <div>
                                        <h2>{book.author}</h2>
                                        <h2>{book.name}</h2>
                                        <h2>{book.price ? `${book.price} грн` : 'Ціна не вказана'}</h2>
                                    </div>

                                </li>
                            ))}</ul>
                        )}
                    </label>

                    <button className="button_change_theme">



                    </button>

                </div>

                <div>

                </div>

                <title title='something'></title>

                <div className="buttons_client">

                    <div>

                    </div>

                    <div>

                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            showKorzyna()
                        }}

                        className='btnShowKorzyna'>
                        П
                        <div
                            className={`displayShowKorzyna ${openKorzyna ? 'open' : 'close'}`}
                            onClick={(e) => {
                                e.stopPropagation();

                            }}
                        >
                            <h1>Кошик</h1>

                            {cart.map((item, id) =>
                                <>
                                    <ShowBlockBookKorzyna book={item} key={item.id}></ShowBlockBookKorzyna>
                                </>

                            )}
                            <h1>Разом  {finalPrice} грн</h1>
                        </div>

                    </button>

                </div >

            </nav >
            <CatalogPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />


        </>
    )
}