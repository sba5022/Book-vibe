import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadBooks from '../../Components/listedbooks/ListedReadBooks';
import ListedWishList from '../../Components/listedbooks/ListedWishList';

const Books = () => {
    const {storedBook,wishList} = useContext(BookContext);
      console.log('bookContext',  storedBook,wishList);
    return (
        <div className='container mx-auto my-3'>
       
          <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadBooks></ListedReadBooks>
    </TabPanel>
    <TabPanel>
      <ListedWishList></ListedWishList>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;