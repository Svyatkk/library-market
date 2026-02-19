import { books, BooksParam } from '../Data/book';

export const getBookById = (id: number): BooksParam | undefined => {
    return books.find(book => book.id === id);
};


