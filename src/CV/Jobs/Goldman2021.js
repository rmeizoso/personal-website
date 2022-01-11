import FullJobDescription from '../WorkDetails/FullJobDescription.js'
import Goldman2021txt from './JobTexts/Goldman2021.txt'
function Goldman2021(){
    const props = {workplace:'Goldman Sachs',
            jobtitle:'Summer Analyst: Software Engineer',
            dates:'June 2021 - August 2021',
            location: 'New York City, New York',
            link: 'https://en.wikipedia.org/wiki/Goldman_Sachs',
            description: Goldman2021txt
        }
    
    return(
        <FullJobDescription {...props}/>
    )
}


export default Goldman2021;