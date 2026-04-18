import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
const BookCard = ({ book }) => {
    return (
        <div>
                   <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-6'>
    <img
      src={book.image}
      alt={book.bookName} className='rounded-2xl h-[250px]' />
  </figure>
  <div className="card-body">
    <div className='flex gap-4 items-center'>
   {book.tags.map((tag) => (<div className="badge text-green-500 bg-green-100">{tag}</div>))}</div>
    <h2 className="card-title  text-2xl">
  {book.bookName}
      
    </h2>
    <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-between  border-t border-dashed pt-4 border-gray-300">
      <div className="font-semibold">{book.category}</div>
      <div className="badge badge-outline">{book.rating}<FaRegStar /></div>
    </div>
  </div>
</Link>
        </div>
    );
};

export default BookCard;