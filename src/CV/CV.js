import Education from './Education.js'
import Infrastrucure from '../Infrastructure.js'
import WorkExperience from './WorkExperience.js'
import ResearchAndProjects from './ReasearchAndProjects'
function CV(){

    function renderBundledComponents(){
        return (
            <div>
                <Education/>
                <WorkExperience/>
                <ResearchAndProjects/>
            </div>
        )
    }
    return(
        <Infrastrucure renderElement={renderBundledComponents()}/>
    )
}

export default CV;