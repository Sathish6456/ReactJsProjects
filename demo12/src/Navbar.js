import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
        <div>
            <nav>
          <Link to="/">Screen1</Link> 
          <Link to="/about">Screen2</Link>
          <Link to="/screen3">Screen3</Link>  
          </nav>
        </div>
    );
}
export default Navbar;