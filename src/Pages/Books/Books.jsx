import React, { useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadBooks from '../../Components/listedbooks/ListedReadBooks';
import ListedWishList from '../../Components/listedbooks/ListedWishList';

const Books = () => {
    const [sortingType,setSortingType] = useState('')
    console.log('sortingType', sortingType);
    return (
        <div className='container mx-auto my-3'>
       <div className='flex justify-center my-3'>
        <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=> setSortingType('pages')}><a>Pages</a></li>
    <li onClick={()=> setSortingType('rating')}><a>Rating</a></li>
  </ul>
</div></div>
          <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadBooks sortingType={sortingType}></ListedReadBooks>
    </TabPanel>
    <TabPanel>
      <ListedWishList sortingType={sortingType}></ListedWishList>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;