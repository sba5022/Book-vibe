
import { useLoaderData, useParams } from 'react-router';
// const booksPromise = fetch('/booksData.json').then(res => res.json());
const BookDetails = () => {
     const books = useLoaderData();
        console.log('books',books);
    const {bookid} =useParams()
    console.log('id',bookid);
    const expectedBooks = books.find(book => book.bookId == bookid)
    console.log('expectedBooks',expectedBooks);
    const {bookId,bookName,author,category,rating,review,totalPages,tags,publisher,yearOfPublishing,image}= expectedBooks;
    return (
    <div className=" bg-base-100 shadow-sm container mx-auto grid grid-cols-2">
  <figure className='w-full flex justify-center bg-gray-100 items-center'>
    <img
      src={image}
      alt="Movie" className='h-[400px]'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <p>By:{author}</p>
    <p className='py-2 border-y'>{category}</p>
    <p className=''> Review:{review}</p>
     <div className='flex gap-4 items-center'>
   {tags.map((tag) => (<div className="badge text-green-500 bg-green-100">{tag}</div>))}</div>
    <div className=" border-t space-y-5">
        <div className='grid grid-rows-4'>
            <span>Number of Pages:{totalPages}</span>
            <span>Publishers:{publisher}</span>
            <span>Year of Publishing:{yearOfPublishing}</span>
            <span>Rating:{rating}</span>
        </div>
     <div className='flex items-center gap-4'>
         <button className="btn btn-primary">Read</button>
          <button className="btn btn-primary">Wishlist</button>
     </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;