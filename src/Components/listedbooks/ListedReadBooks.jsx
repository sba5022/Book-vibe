import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../../ui/BookCard';

const ListedReadBooks = ({ sortingType }) => {
     const {storedBook} = useContext(BookContext);
          console.log('bookContext',  storedBook);
const [filterReadList, setFilterReadList] = useState(storedBook)
         useEffect(() => {
 if(sortingType){
            if(sortingType === 'pages'){
                const sortedData =[...storedBook].sort((a,b) => a.totalPages - b.totalPages)
                console.log('sortedData', sortedData);
                setFilterReadList(sortedData)
          }
          else if(sortingType === 'rating'){
            const sortedData =[...storedBook].sort((a,b) => a.rating - b.rating)
                console.log('sortedData', sortedData);
                setFilterReadList(sortedData)
          }}

         },[sortingType,storedBook])
            if(filterReadList.length === 0){
        return <div className='flex justify-center bg-gray-100 h-[50vh] items-center'>
            <h2 className='font-bold text-3xl'>No Read Books</h2></div>  
        }
    return (
        <div>
          
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'> 
             {
            filterReadList.map((book,index) => <BookCard key={index} book={book}></BookCard>)
          }
          </div>
        </div>
    );
};

export default ListedReadBooks;