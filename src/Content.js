import {useState, useEffect} from 'react';

const Content = () => {

    const [tweets, setTweet] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController();
        fetch('http://localhost:8001/tweets', {signal: abortCont.signal})
        .then((res)=>{
            if(!res.ok){
                throw Error('Could Not Fetch Tweets')
            }
            return res.json();
        })
        .then((data)=>{
            setTweet(data)
            setPending(false)
            setError(null)
        })
        .catch((err)=>{
            if(err.name === 'AbortError'){
                console.log('Abort Error')
            }else{
                setPending(false);
                setError(err.message)
            }

        });

        

        return () => abortCont.abort();
    },[tweets])

    return ( 
        <div className="content">

            {error && <div>Failed to Feth Data</div>}
            {isPending && <div>Loading ...</div>}
            {!isPending && tweets.slice(0).reverse().map( tweet => (
                    <div className='twt'>
                        <div className="pic">
                            <img src={require('./images/andrew.jpg')} alt="" style={{borderRadius: '100%', marginTop:'20px'}} width={'50px'} />
                        </div>
                        <div className="tweetContent">
                            <div className="tweetHeader">
                                <div className="username">Mwalimu Andrew</div> <div className="handle">@BenNdiwa</div>
                            </div>
                            <div className="tweetBody">
                                {tweet.tweet}
                            </div>
                            <div className="tweetFooter">
                                <img src={require('./images/comment.png')} width='18px' height='16px' alt="" style={{marginTop:'0.5%',marginRight: '30%'}}/>
                                <img src={require('./images/arrow.png')} width='18px' height='22px' alt="" style={{marginTop:'0%', marginRight: '30%'}}/>
                                <img src={require('./images/heart.png')} width='18px' height='16px' alt="" style={{marginTop:'1%', marginRight: '25%'}}/>
                                <img src={require('./images/upload.png')} width='18px' height='16px' alt="" style={{marginTop:'1%'}}/>
                            </div>
                            
                            
                        </div>
                        
                    </div>
            ))}
        </div>
     );
}
 
export default Content;