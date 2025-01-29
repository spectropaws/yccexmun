'use client'
import Carousel from './components/Carousel';
import Navbar from './components/Navbar'; 
import './components/ui/styles.css';
import './styles/globals.css';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        {/*</herosection>*/}
        <Carousel />
      </div>
    </>
  );
};

export default Page;
