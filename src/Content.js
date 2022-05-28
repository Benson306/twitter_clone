import {useState, useEffect} from 'react'
const Content = () => {

    const [tweets, setTweet] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController();
        let result = fetch('http://localhost:8001/tweets', {signal: abortCont.signal})
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
            {isPending && <div>Loading ...</div>}
            {!isPending && tweets.slice(0).reverse().map( tweet => (
                    <div className='twt'>
                        {tweet.tweet}
                    </div>
            ))}
        </div>
     );
}
 
export default Content;