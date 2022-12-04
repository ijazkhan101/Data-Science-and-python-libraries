
import  React from 'react';
import Art from './assets/art.png';
import joinbtn from './assets/join.PNG';

function Home(){
    return(
    <div className='row'>
          <div className="col-lg-4 col-md-4 col-sm-12 homebg">
              <p className='homepara'>Step into the Metaverse
                Your home, your keys, your right
                Claim your home for free now!</p>
                <div class="input-group">
                <input type="text" class="form-control emailinput" placeholder="Your email" />
                </div>

                <button class="btn">               
                    <img  src={joinbtn}  className='joinbtn'/>
                
                </button>
                </div>
              
          <div className="col-lg-8 col-md-8 col-sm-12 " >
          <img src={Art} alt="Logo" className='artcss'/>
          </div>
   
    </div>
      

    )
};

export default Home;