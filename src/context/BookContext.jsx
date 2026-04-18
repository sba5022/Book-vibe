import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

 export const BookContext = createContext();
const BookProvider = ({ children }) => {
     const [storedBook,setStoredBook] = useState([]);
     const [wishList,setWishList] = useState([]);
    const handleMarkasRead =(currentBook)=>{
      console.log('bookid', currentBook)
      const isExistBook = storedBook.find(book => book.bookId == currentBook.bookId)
      if(isExistBook){
        toast('Already Marked as Read')
      }
      else{
        setStoredBook([...storedBook,currentBook])
        alert(`${currentBook.bookName} is added to list`)
      }

    }
      const handleWishList =(currentBook)=>{
      console.log('bookid', currentBook);
const isExistinReadList = storedBook.find(book => book.bookId == currentBook.bookId)
if(isExistinReadList){
    toast('Already Marked as Read')
    return;
}

      const isExistBook = wishList.find(book => book.bookId == currentBook.bookId);
      
      if(isExistBook){
        toast('Already Marked as Read')
      }
      else{
        setWishList([...wishList,currentBook])
        alert(`${currentBook.bookName} is added to list`)
      }

    }
    const data= {
       storedBook,
       setStoredBook,
       handleMarkasRead,
       wishList,
       setWishList,
         handleWishList
    }
    return  <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
    ;
};

export default BookProvider;