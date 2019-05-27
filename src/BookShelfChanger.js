import React, {Component} from 'react';


class BookShelfChanger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shelfValue: ""
        };
    }

    handleChangeShelf = (event) => {
        this.setState({shelfValue: event.target.shelfValue});
        console.log('value', this.state.shelfValue);
    };

    setValue = () => {
        const {
            books
        } = this.props;

        console.log('books', this.props.books);

        let newShelf = books.find(
            book => book.id === books.id
        );
        if (newShelf) {
            return newShelf.shelf;

        } else {

            return "none";
        }
    };

    render() {



        return (
            <div className="book-shelf-changer">

                <select
                    value={this.state.shelfValue}
                    onChange={this.handleChangeShelf}
                    defaultValue={this.setValue}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>

            </div>


        );
    }
}

export default BookShelfChanger;