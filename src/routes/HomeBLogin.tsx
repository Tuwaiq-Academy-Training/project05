import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Posts } from "../components/Posts";
import { TopMenu } from "../components/TopMenu";

export function HomeBLogin(){
    return<>
    <Nav />
    <div className='flex'>
    <Menu />
    <div className='column-flex'>
    <TopMenu />
    <Posts />
    </div>
    </div>    
    </>
}