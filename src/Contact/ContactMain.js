import Infrastructure from '../Infrastructure.js'
import Email from './Email.js'
import SocialMedia from './SocialMedia'
function ContactMain(){

    function getRenderElements(){
        return <div>
            <p className='CV-headers'>Contact Information</p>
            <Email />
            <SocialMedia/>
        </div>
    }
    return <Infrastructure renderElement = {getRenderElements()}/>
}

export default ContactMain;