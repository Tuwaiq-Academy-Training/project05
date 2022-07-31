import { Link } from 'react-router-dom';
import { BiVideo} from 'react-icons/bi';
import { AiOutlineHome} from 'react-icons/ai';
import { BsTags,BsMic} from 'react-icons/bs';

export function Sidenav() {
    return (
          <div className="box">
<div className="sidenav">

<Link to={'/posts'}> <a  href="#about"> <AiOutlineHome  size={15} />  Home </a> </Link>
<Link to={'/prodcast'}> <a  href="#about"> <BsMic  size={15} />  podcasts </a> </Link>
<Link to={'/video'}> <a  href="#about"> <BiVideo  size={15} />  videos </a> </Link>
<Link to={'/tags'}> <a  href="#about"> <BsTags  size={15} />  tags</a> </Link>



</div>
</div>
    )}