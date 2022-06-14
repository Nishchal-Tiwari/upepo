import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import Increment from '../component/increment.js';
 function Homepage(){
return (
    <div className='homepage'>
        <Navbar/>
        <Increment/>
        <Footer/>
    </div>
);

}
export default Homepage;