import React, { Component } from 'react';
import BookItem from './BookItem';



class BookShelf extends Component {



    render() {

        const {
            bookList,
            shelfTitle,
            booksWithShelf,
            changeBookShelf
        } = this.props;

        return(

            <div className="bookshelf">
                <h1 className="bookshelf-title">{shelfTitle}</h1>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {bookList.map((book, i) =>{
                            return(
                                <BookItem
                                    key={i}
                                    book={book}
                                    booksWithShelf={booksWithShelf}
                                    changeBookShelf={changeBookShelf} />
                            );
                        })

                        }

                    </ol>


                </div>
            </div>
        )
    }

}

export default BookShelf;