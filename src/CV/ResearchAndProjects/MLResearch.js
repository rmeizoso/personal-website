import FullJobDescription from '../WorkDetails/FullJobDescription.js'
import MLResearchtxt from './ResearchTexts/MLResearch.txt'

function MLResearch(){
    const props = {workplace:'Manufacturing with Machine Learning',
            jobtitle:'Undergrate Research Assistant',
            dates:'January 2020 - May 2020',
            location: 'Atlanta, GA',
            link: 'https://arxiv.org/abs/1908.06297',
            description: MLResearchtxt
        }
    return(
        <FullJobDescription {...props}/>
    )
}

export default MLResearch;