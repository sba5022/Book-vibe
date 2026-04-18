import React from 'react';
import bookimg from '../../assets/book 1.png';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <img
                        src={bookimg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-5'>
                        <h1 className="text-5xl font-bold"> Books to freshen up <br /> your bookshelf</h1>
                        
                        <button className="btn btn-success">View the List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;