import { DashbaordPage } from "../componets/DashboardPage";
import { NavbarPage } from "../componets/Navbar";
import { Posts } from "./posts";


export function HomePage() {

    return (
        <>
            <NavbarPage />

            <section className="container">


                <DashbaordPage />


                <div className="right-side">

                    <div className="heading11">
                        <h1> Aprendendo sobre testes de softwares </h1>
                    </div>
                    <div className="right">
                        <Posts />
                    </div>
                </div>


            </section>
        </>
    )

}