import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const params =useParams()
    console.log('params',params);
    return (
        <div>
            Books detail
        </div>
    );
};

export default BookDetails;