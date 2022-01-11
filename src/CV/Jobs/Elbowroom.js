import FullJobDescription from '../WorkDetails/FullJobDescription.js'
import Elbowroomtxt from './JobTexts/Elbowroom.txt'
function Elbowroom(){
    const props = {workplace:'Elbowroom Inc.',
            jobtitle:'Lead Data Scientist & Web Developer',
            dates:'April 2020 - December 2021',
            location: 'Atlanta, GA',
            link: 'https://www.linkedin.com/company/elbowroomco/about/',
            description: Elbowroomtxt
        }
    
    return(
        <FullJobDescription {...props}/>
    )
}


export default Elbowroom;