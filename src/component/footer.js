import React from 'react';
import '../css/homepage.css';
import data from '../constants/constants';
function Footer()
{
    return(
        <div id='footer'>
            {data.footer.text}
        </div>
    );
}
export default Footer;