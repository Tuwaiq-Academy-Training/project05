export function CreatePost(){
return <>
<section>
    <div className="create-nav">
    <div className='first-part'> 
        <img className='logo' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo" />   
         <p>create post</p>
        </div>
        <div className='second-part'>
        <div className='login-btn'>Edit</div>
        <div className='login-btn'>Preview</div>
        </div>
    </div>
<div className="create-post">
    <button> Add cover image</button>
    <h1>New post title here</h1>
    <p>add up to 4 tags..</p>
    <p>Write your post content here</p>
</div>
<button className="edit-profile">publish</button>
</section>
</>

}