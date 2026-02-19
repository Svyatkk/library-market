
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../../Data/book';
import Nav from '../Nav/Nav';
import { catalogs } from '../../Data/book';
import BlockBook from '../BlockBook/BlockBook';
import './ShowCategoryBooks.css';
import { filterBooksByCategory } from '../../services/bookFilter.service'



export default function ShowCategoryBooks() {

    const { mainCategory, subCategory } = useParams();

    const decodedMain = mainCategory ? decodeURIComponent(mainCategory) : '';
    const decodedSub = subCategory ? decodeURIComponent(subCategory) : null

    const filteredBooks = filterBooksByCategory(books, decodedMain, decodedSub);



    return (
        <>
            <Nav></Nav>

            <div className='catpage'>
                <div className='books'>

                    {filteredBooks.map((book, index) => (
                        <>


                            <BlockBook key={index} book={book} ></BlockBook >
                        </>

                    ))}

                </div>
            </div >


        </>
    )
}