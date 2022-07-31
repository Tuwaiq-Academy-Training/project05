import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  className='footerEnd '>
      <div className='text-center p-3' >
        DEV Community — A constructive and inclusive social network for software developers.
         With you every step of your journey.<br/>
         Built on Forem — the open source software that powers DEV and other inclusive communities.
         <br/>
        Made with love and Ruby on Rails. DEV Community 
        &copy; {new Date().getFullYear()} Copyright:{' '}
        
      </div>
    </MDBFooter>
  );
}