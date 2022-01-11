import picture from '../images/header_picture_lean.jpg';
import {Image} from 'react-bootstrap';

function HeaderPicture(){
    return(
    <div>
    <img src={picture} className="photo"  alt="image"/>
    </div>
     )
}

export default HeaderPicture;