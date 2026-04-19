import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../../ui/BookCard';

const ListedWishList = () => {
    const {wishList} = useContext(BookContext);
          console.log('bookContext',  wishList);
          if(wishList.length === 0){
        return <div className='flex justify-center bg-gray-100 h-[50vh] items-center'>
            <h2 className='font-bold text-3xl'>No Wish List</h2></div> 
        }
    return (
        <div>
          
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'> 
             {
            wishList.map((book,index) => <BookCard key={index} book={book}></BookCard>)
          }
          </div>
        </div>
    );
};

export default ListedWishList;