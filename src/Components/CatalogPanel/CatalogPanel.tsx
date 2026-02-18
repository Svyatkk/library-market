import { ReactNode, useState } from "react"
import { catalogs } from "../../Data/book"
import './CatalogPanel.css'

type Props = {
    isOpen: boolean,
    onClose: () => void
}

export default function CatalogPanel({ isOpen, onClose }: Props) {

    const count = 3

    return (
        <>
            <section className={`catalog_panel ${isOpen ? "open" : " "}`}>
                <div className="highPanel">

                    <h1>Каталог</h1>
                    <button className="closeBtn" onClick={(e) => {
                        e.preventDefault()
                        onClose()

                    }} >X</button>

                </div>

                <div className="wrapperButtons">
                    {catalogs.map(catalog =>
                        <>
                            <div className="blockCat">
                                <a className="main" href="">
                                    {catalog.mainCategory}
                                </a>

                                <div className="subCategories">
                                    {
                                        catalog.subCategories
                                            .slice(0, count)
                                            .map(item =>
                                            (
                                                <a href="#">
                                                    {item.name}
                                                </a>
                                            ))
                                    }
                                    <div className="blockShowrest">

                                        +{catalog.subCategories.length - count} категорій
                                    </div>

                                </div>
                            </div >
                        </>
                    )}

                </div >
            </section >
        </>
    )
}