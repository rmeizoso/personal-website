import FullJobDescription from '../WorkDetails/FullJobDescription.js'
import GTA3630txt from './JobTexts/GTA3630.txt'

function GTA3630(){
    const props = {workplace:'CS 3630: Introduction to Robotics and Perception',
            jobtitle:'Graduate Teaching Assistant',
            dates:'August 2021 - Present',
            location: 'Atlanta, Georgia',
            link: 'https://harishravichandarblog.files.wordpress.com/2019/08/cs3630_fall2019_syllabus.pdf',
            description: GTA3630txt
        }
    
    return(
        <FullJobDescription {...props}/>
    )
}


export default GTA3630;