import Profile from './images/andrew.jpg';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Content from './Content';

const Posttweet = () => {
        
    const [tweet, setTweet] = useState('');

    const tweets = {tweet}

    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch('http://localhost:8001/tweets',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(tweets)
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
                        onChange={(e) => setTweet(e.target.value)}
                        style={{resize: 'none',marginLeft: '1%', border: 'none', borderBottom: '1px solid gray', backgroundColor: 'black', color: 'white', fontSize: '22px'}}></textarea>
                    <br />
                    <input type="submit" style={{marginTop:'1%',backgroundColor:'rgb(29, 155, 240)', color: 'white', padding: '10px', border: 'none', borderRadius:'9999px', fontWeight: 'bold', fontSize: '16px', float: 'right'}} value="Tweet" />
                    </form>
                
            </div>
            
            
        </div>
     );
}
 
export default Posttweet;