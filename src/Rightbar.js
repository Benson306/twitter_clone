import Follow from "./Follow";
import Messages from "./Messages";
import Trends from "./Trends";

const Rightbar = () => {
    return ( 
        <div className="rightbar">
            <nav id='sidenav'>
                <form>
                        <input type="text" placeholder="Search Twitter"/>
                </form>
            </nav>
            <br />
            <Trends />
            <Follow />
            <div className="tcs">
                <p>Terms of Service     Privacy Policy  Cookie Policy</p>
                <p>Accessibility    Ads info    More ... </p>
                <p>© 2022 Twitter, Inc.</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='inbox'>
            <Messages />
            </div>
            
        </div>
     );
}
 
export default Rightbar;