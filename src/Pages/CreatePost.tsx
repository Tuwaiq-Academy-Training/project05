import React, { useContext } from "react";
import { NavbarPage } from "../componets/Navbar";
import { devContext } from "../utils/devContext";

export function CreatePostPage() {
    const { addPost } = React.useContext(devContext)



    return (
        <>
            <NavbarPage />
            <form onSubmit={addPost} className="cover-cont-create-post">

                <div className="container-create-post">

                    {/* <div> */}
                    <input type="file" className="custom-file-input" name="photo" />
                    {/* </div> */}

                    <div className="title-create-post">
                        <input className="input-1-create-post" type="text" name="title" placeholder="New post Title here..." />

                        <input className="input-2-create-post" type="text" name="tag" placeholder="Add up to 4 tags..." />

                    </div>
                    <div>
                        <input className="input-3-create-post" type="text" name="content" placeholder="Write your content post here..." />
                    </div>
                </div>
                <div className="btn-publish">
                    <button className="btn-pub">Publish</button>
                </div>

            </form>

        </>
    )
}