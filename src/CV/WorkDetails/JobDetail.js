import {useState} from 'react'
import {Button} from 'react-bootstrap'

function JobDetail(props){
    const [renderState, setRenderState] = useState('Exited')
    const description = props.description.map((d) => 
    <li  className='Job-Description'>{d}</li>)

    function fsm(){
        if (renderState == 'Exited'){
            setRenderState('Entered')

        }else if(renderState == 'Entered'){
            setRenderState('Exited')
        }     
    }

    function getRenderComponent(){
        if(renderState == 'Entered'){
            return <div>
                <ul>
                    {description}
                 </ul>
                <Button className='CV-button' onClick={fsm}>...</Button>
            </div>
        }else if(renderState=='Exited'){
            
            return <div>
            
            <Button className='CV-button' onClick={fsm}>...</Button>
        </div>
        }
    }
       

    return  getRenderComponent()
        
    
}
export default JobDetail