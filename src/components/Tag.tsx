import { ITag } from "../data";

interface TagProps {
	tag: ITag;
}

export function Tag({ tag }: TagProps){
return <>
<div className="tag">
 <h1>{tag.tag}</h1>
 <p>{tag.description}</p>
 <p>{tag.postCount} posts published</p>
 <div className="follow-btn">Follow</div>
</div>
</>
}