import image from './images/twitter.png'
import bell from './images/bell.png'
import hash from './images/hashtags.png'
import home from './images/home.png'
import inbox from './images/email.png' 
import bookmark from './images/bookmark.png'
import list from './images/list.png'
import profile from './images/user.png'
import more from './images/more.png'

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <br />
            <img src={image} alt="" height={"30px"} style={{marginLeft:"15%"}}/>
            <br />
            <ul>
                <li><img src={home} alt="" height={"20px"} width={'25px'}style={{marginRight:"5%"}}/>Home</li>
                <li><img src={hash} alt="" height={"20px"} style={{marginRight:"5%"}}/>Explore</li>
                <li><img src={bell} alt="" height={"20px"} style={{marginRight:"5%"}}/>Notificatons</li>
                <li><img src={inbox} alt="" height={"20px"} style={{marginRight:"5%"}}/>Messages</li>
                <li><img src={bookmark} alt="" height={"20px"} style={{marginRight:"5%"}}/>Bookmarks</li>
                <li><img src={list} alt="" height={"20px"} style={{marginRight:"5%"}}/>Lists</li>
                <li><img src={profile} alt="" height={"20px"} style={{marginRight:"5%"}}/>Profile</li>
                <li><img src={more} alt="" height={"20px"} style={{marginRight:"5%"}}/>More</li>
                <br />
                <button id='twtbtn'>Tweet</button>
            </ul>
        </div>
     );
}
 
export default Sidebar;