import React, {useState, useEffect} from 'react';
import { FaMaxcdn } from 'react-icons/fa';

function ProjectTemplate(props){

    useEffect(()=>{
        if (document.getElementById(props.name)){
            document.getElementById(props.name).src = props.image
            document.getElementById(props.name).style.height = '' + Math.min(.8*document.getElementById(props.name + 'text').clientHeight,150)+'px'
            document.getElementById(props.name).style.maxHeight = '' + 200+'px';
            document.getElementById(props.name).style.maxWidth = '200px';
            document.getElementById(props.name).style.height = 'auto';
            document.getElementById(props.name).style.width = 'auto';
        }
        function handleResize() {
            if (document.getElementById(props.name)){
                document.getElementById(props.name).src = props.image
                console.log(document.getElementById(props.name + 'text').clientHeight)
                document.getElementById(props.name).style.maxHeight = '' + 200+'px';
                document.getElementById(props.name).style.maxWidth = 'auto';
                document.getElementById(props.name).style.height = 'auto';
                document.getElementById(props.name).style.width = 'auto';
                

            }
        }
          
        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        
    }
    })

    
    function renderSelector(props){
    
        if(props.image){
            
            return (<div>  
            <p className="CV-workplace-header">{props.header}</p>
            <img id={props.name} className="photo"  alt="image"/>
            <p className="CV-center" id={props.name + 'text'}>{props.description}</p>   
            <hr/>
        </div>)
        }
        return (<div>  
        <p className="CV-workplace-header">{props.header}</p>
        <p className="CV-center">{props.description}</p>   
        <hr/>
        </div>)
    };

    return renderSelector(props)
}

export default ProjectTemplate;