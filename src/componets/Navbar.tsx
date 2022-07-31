import React from 'react';
import { IoMdNotifications } from 'react-icons/io';

import { Link } from 'react-router-dom';

export function NavbarPage() {

    return (
        <>

            <div className='nav-container'>


                <div className="nav">

                    <div className='left-nav'>

                        <div>
                            <Link to={'/'}><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" width='50px' height='30px' /></Link>
                        </div>
                        <div>
                            <input className='search' type="text" name='search' placeholder='Search..' />
                        </div>
                    </div>

                    <div className='right-nav'>
                        <div>
                            <Link to={'/create-post'}><button className='btn-nav'>create post</button></Link>
                        </div>

                        <IoMdNotifications fontSize={25} />
                        <Link to={'/profile'}><img className='avatar-nav' src="https://avatars.githubusercontent.com/u/60841988?v=4" alt="" /></Link>
                    </div>
                </div>
            </div>






        </>
    )
}