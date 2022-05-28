import Profile from './images/andrew.jpg';
import {useState, useEffect} from 'react';
import Content from './Content';

const Posttweet = () => {
        
    const [tweet, setPost] = useState('');

    const posts = {tweet}


    const handleSubmit = (e)=>{
        e.preventDefault();
        e.target.value=null;
        fetch('http://localhost:8001/tweets',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(posts)
        })
        .then(()=>{
                  
        })
        
    }

   

    return ( 
            <div className="post">
                        <div className="profile">
                            <img src={Profile} alt="" style={{borderRadius:"100%", marginRight:'2%', height: "50px"}}/>
                        </div>
                        <div className="tweet">
                            <form onSubmit={handleSubmit}>
                                <textarea 
                                    placeholder="What's happening?" 
                                    rows='2' cols='38' 
                                    required
                                    onChange={(e) => setPost(e.target.value)}
                                    style={{resize: 'none',marginLeft: '1%', border: 'none', borderBottom: '1px solid gray', backgroundColor: 'black', color: 'white', fontSize: '22px'}}></textarea>
                                <br />
                                <input type="submit" style={{marginTop:'1%',backgroundColor:'rgb(29, 155, 240)', color: 'white', padding: '10px', border: 'none', borderRadius:'9999px', fontWeight: 'bold', fontSize: '16px', float: 'right'}} value="weet" />
                                </form>
                            
                        </div>
                        
                        
                    </div>
        
        
     );
}
 
export default Posttweet;