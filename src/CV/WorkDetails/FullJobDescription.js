import JobHeader from './JobHeader'
import JobDetail from './JobDetail'
import {getText,parseTextToList} from '../../util.js'
import{useState, useEffect} from 'react'


function FullJobDescription(props){
    
    const [text, setText] = useState('')
    const {workplace, jobtitle, dates, location, link, description} = props

    var parsedText;
    useEffect(() => {
        if(!text){
            getText(description,setText)
        }
    })
    parsedText = parseTextToList(text)
    return(
    <div>
    <JobHeader        workplace= {workplace}
                      jobtitle= {jobtitle}
                      dates={dates}
                      link={link}
                      location = {location}/>
    <JobDetail description = {parsedText} />              
    </div>)
}

export default FullJobDescription;