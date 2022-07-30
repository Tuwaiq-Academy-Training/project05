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
            <h1> Setting for @essa433</h1>
            <form onSubmit={editProfile} className="container-edit-profile">
                <h1> User </h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input defaultValue={profile.name} type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input defaultValue={profile.email} type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="">Username</label>
                    <input defaultValue={profile.username} type="text" name="username" />
                </div>
                <div>
                    <button>Edit </button>
                </div>

            </form>
        </>
    )
}