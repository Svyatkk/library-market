import { BooksParam } from "../Data/book";


export function filterBooksByCategory(
    books: BooksParam[],
    mainCategory: string,
    subCategory?: string | null
): BooksParam[] {
    return books.filter(book =>
        book.catalog.some(cat =>
            subCategory
                ? cat.mainCategory === mainCategory && cat.subCategory === subCategory
                : cat.mainCategory === mainCategory
        )
    );
}
