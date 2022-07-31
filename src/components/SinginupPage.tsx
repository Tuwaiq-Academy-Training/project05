
export function SinginupPage()
{
    return(
        <>
        <h1>here is singinup </h1>
        <div className="singinup-container">
         
       
            <div className="singinup-searchbos">
             <input placeholder="Enter Post Title"/>
             <input placeholder="Enter Post Title"/>
             <input placeholder="Enter Post Title"/>
             </div>
             <div className="login-btn">
             <button type="button" className="btn">Log in with Facebook</button>
             </div>
             <div className="or-">
                 <h4>OR</h4>
             </div>
             <div className="forget">
             <a  className="forget-text" href="">Forget password ?</a>
             </div>
    
        
    
                
            </div>
    
            <div className="login-boxtwo">
                 <h4 className="boxtwo-textone">Dont have an account?</h4>
                 <a  className="boxtwo-textwo" href="/Singinup">Sing up </a>
    
             </div>
    
               <div className="lastlogin-container">
                 <h4 className="bootom-text">Get the app</h4> 
                
                 <div className="lastlogin-photo">
                 
                 </div>
    
                 </div>
        
      
        </>
    )
}