import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const {storedBook,wishList} = useContext(BookContext);
      console.log('bookContext',  storedBook,wishList);
    return (
        <div className='container mx-auto'>
         Read list:{storedBook.length}
         <br />
         Wishlist:{wishList.length}
        </div>
    );
};

export default Books;