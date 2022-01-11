import FullJobDescription from '../WorkDetails/FullJobDescription.js'
import GRITSLabtxt from './ResearchTexts/GRITSLab.txt'

function GRITSLab(){
    const props = {workplace:'GRITS Lab',
            jobtitle:'Graduate Research Assistant',
            dates:'May 2020 - Present',
            location: 'Atlanta, GA',
            link: 'http://gritslab.gatech.edu/home/',
            description: GRITSLabtxt
        }
    return(
        <FullJobDescription {...props}/>
    )
}

export default GRITSLab;