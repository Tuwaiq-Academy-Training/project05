import { Articles } from "./Articles";

export function Content(){
    return(
        <div className="content">
            <div className="header">
                <a href="#"><h1>Relevant</h1></a>
                 <div className="nav">
                   <a href="#">Latest</a> 
                   <a href="#">Top</a> 
                 </div>
            </div>
            <Articles></Articles>
        </div>

    );
}