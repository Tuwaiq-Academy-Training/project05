
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function Podcast() {
	return ( 
        <div className="podcasts">
           <div className="top-pod">
     <h1>Podcasts</h1>
    <button type="button" className="btn-pod" > Suggest a Podcast</button>
           </div>
      <h2>Latest episodes</h2>
      <div className='all-card'>
        
<div className="card">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7_tgaxF5--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/567/de317e06-1d0c-40b6-a5a6-64dc3cf60474.png" alt="" />
  {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
  <div className="card-taxt">
    <h4><b>More than a Cache: Turning Redis into a Composable, ML Data Platform // Samuel Partee // Coffee Sessions #111</b></h4> 
    <p> MLOps Community,</p> 
  </div>
</div>
<div className="card">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--HMYtC324--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/21/art.png" alt="" />
  {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
  <div className="card-taxt">
    <h4><b>#375: Python Language Summit 2022</b></h4> 
    <p>  Talk Python, </p> 
  </div>
</div>

      </div>
        </div>
    )}