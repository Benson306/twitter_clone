import arrow from './images/up-arrow.png'
import newMessage from './images/new-message.png'

const Messages = () => {
    return ( 
    <div className="messages">
        <div className="legend">
            Messages
        </div>
        <div className="sms">
            <img src={newMessage} alt="" height={"20px"} style={{marginRight:"50%"}}/>
            <img src={arrow} alt="" height={"20px"} style={{marginRight:""}}/>
            
        </div>
    </div> 
    
    );
}
 
export default Messages;

