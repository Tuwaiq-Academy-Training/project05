import { LoggedinNav } from "../components/LoggedinNav";
import { Menu } from "../components/Menu";
import { Posts } from "../components/Posts";
import { TopMenu } from "../components/TopMenu";

export function LoggedinH(){
    return<>
    <LoggedinNav />
    <div className='flex'>
    <Menu />
    <div className='column-flex'>
    <TopMenu />
    <Posts />
    </div>
    </div>    
    </>
}