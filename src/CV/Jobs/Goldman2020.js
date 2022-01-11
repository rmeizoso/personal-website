import FullJobDescription from '../WorkDetails/FullJobDescription.js'
import Goldman2020txt from './JobTexts/Goldman2020.txt'

function Goldman2020(){
    const props = {workplace:'Goldman Sachs',
            jobtitle:'Summer Analyst: Software Engineer',
            dates:'July 2020 - August 2020',
            location: 'New York City, New York',
            link: 'https://en.wikipedia.org/wiki/Goldman_Sachs',
            description: Goldman2020txt
        }
    
    return(
        <FullJobDescription {...props}/>
    )
}


export default Goldman2020;