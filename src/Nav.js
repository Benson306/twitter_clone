import star from './images/shining.png'
const Nav = () => {
    return ( 
        <div className="navbar">
            <nav>
                <ul>
                    <li style={{fontSize: 'large', marginRight: '55%'}}><b>Home</b></li>
                    <li><img  id='star' src={star} alt="" height={"20px"} style={{marginRight:"5%", float: 'right'}}/></li>
                </ul>

            </nav>
        </div>
     );
}
 
export default Nav;