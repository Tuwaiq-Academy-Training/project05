import { Link } from 'react-router-dom';
import { BiVideo} from 'react-icons/bi';
import { AiOutlineHome} from 'react-icons/ai';
import { BsTags,BsMic} from 'react-icons/bs';

export function Sidnav() {
    return (
          <div className="box">
<div className="sidnav">

<Link to={'/posts'}> <a  href="#Home"> <AiOutlineHome  size={15} />  Home </a> </Link>
<Link to={'/prodcasts'}> <a  href="#podcasts"> <BsMic  size={15} />  podcasts </a> </Link>
<Link to={'/video'}> <a  href="#videos"> <BiVideo  size={15} />  videos </a> </Link>
<Link to={'/tags'}> <a  href="#tags"> <BsTags  size={15} />  tags</a> </Link>



</div>
</div>
    )}