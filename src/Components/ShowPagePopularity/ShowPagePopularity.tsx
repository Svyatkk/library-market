import "./ShowPagePopularity.css"
import BlockBook from "../BlockBook/BlockBook"
import { books, BooksParam, calcSalary } from "../../Data/book"
import BanerBookBlock from "../BanerBookBlock/BanerBookBlock"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper'
import { useEffect, useRef, useState } from "react"
import { BanerType } from "../BanerBookBlock/BanerBookBlock"

export default function ShowPagePopularity({ textBaner }: { textBaner: BanerType | null }) {

    const swiperRef = useRef<SwiperType | null>(null)

    function filterbooks(textBaner: string): BooksParam[] {
        if (!textBaner) return []

        switch (textBaner) {
            case BanerType.Exclusive:
                return books.filter(book => book.price > 300)

            case BanerType.Salary:
                return books.filter(book => book.salarydiscount === true)

            case BanerType.New:
                return books.filter(book => book.price > 100)

            default:
                return []
        }
    }

    const chosen = filterbooks(textBaner!)

    return (

        <>
            <div className="">
                <div className="block_popular">

                    <h1>{textBaner}</h1>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={20}
                        modules={[Navigation, Pagination]}
                        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
                        className="swiperPage"
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 6 },
                        }}
                    >

                        {
                            chosen.map(book =>
                                <SwiperSlide className="slidePage">
                                    <BlockBook

                                        book={book}
                                        childrenBaner={<BanerBookBlock textBaner={textBaner} />}
                                    />
                                </SwiperSlide>
                            )
                        }

                    </Swiper>

                </div>
            </div >
        </>
    )
}
