import { Tab, Tabs, TabList, TabPanel,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='my-14'>
            <h1 className='text-center font-bold text-5xl '>Shop by Category </h1>
       <div className='text-center my-7'>
       <Tabs>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>StarWars</Tab>
                    <Tab>DC Comics</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
       </div>
        </div>
    );
};

export default ShopByCategory;