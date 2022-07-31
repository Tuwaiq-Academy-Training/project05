import { useContext } from "react";
import { NavbarPage } from "../componets/Navbar";
import { devContext } from "../utils/devContext";
import { Posts } from "./posts";

export function EditeProfile() {
    const profile = JSON.parse(localStorage.getItem('Profile') || "")
    const { editProfile } = useContext(devContext)
    return (
        <>
            <NavbarPage />
            <div className="con-head">
            <h1 className="head-edit"> Setting for</h1>
            <h1 className="head-edit-2"> @essa433</h1>

            </div>
            
            <form className="container-edit-profile" onSubmit={editProfile} >
                <div className="insid-form">

                <h1> User </h1>
                <div className="label-input">
                    <label htmlFor="">Name</label>
                    <input className="label-input-in" defaultValue={profile.name} type="text" name="name" />
                </div>
                <div className="label-input">
                    <label htmlFor="">Email</label>
                    <input className="label-input-in" defaultValue={profile.email} type="text" name="email" />
                </div>
                <div className="label-input">
                    <label htmlFor="">Username</label>
                    <input className="label-input-in" defaultValue={profile.username} type="text" name="username" />
                </div>

                </div>

            </form>
                <div className="cont-btn-edit">
                    <button className="btn-edit-1">Edit </button>
                </div>
        </>
    )
}