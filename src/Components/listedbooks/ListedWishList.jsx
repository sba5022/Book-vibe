import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../../ui/BookCard';

const ListedWishList = ({ sortingType }) => {
    const {wishList} = useContext(BookContext);
          console.log('bookContext',  wishList);
const [filterWishList, setFilterWishList] = useState(wishList)
         useEffect(() => {
 if(sortingType){
            if(sortingType === 'pages'){
                const sortedData =[...wishList].sort((a,b) => a.totalPages - b.totalPages)
                console.log('sortedData', sortedData);
                setFilterWishList(sortedData)
          }
          else if(sortingType === 'rating'){
            const sortedData =[...wishList].sort((a,b) => a.rating - b.rating)
                console.log('sortedData', sortedData);
                setFilterWishList(sortedData)
          }}

         },[sortingType,wishList])

          if(filterWishList.length === 0){
        return <div className='flex justify-center bg-gray-100 h-[50vh] items-center'>
            <h2 className='font-bold text-3xl'>No Wish List</h2></div> 
        }
    return (
        <div>
          
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'> 
             {
            filterWishList.map((book,index) => <BookCard key={index} book={book}></BookCard>)
          }
          </div>
        </div>
    );
};

export default ListedWishList;