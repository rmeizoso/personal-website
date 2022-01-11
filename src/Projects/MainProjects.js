import {useState, useEffect} from 'react'
import RBMC from './ProjectFunctions/RBMC.js'
import Spike from './ProjectFunctions/Spike.js'
import Infrastructure from '../Infrastructure.js'
import Controls from './ProjectFunctions/Controls'
function MainProjects(){
    function getRenderElements(){
        return <div>
            <div className='CV-headers'>Projects of Interest</div>
            <hr/>
            <RBMC/>
            <Spike />
            <Controls/>
            </div>
    }
    return (

        <Infrastructure renderElement={getRenderElements()}/>
        );
}

export default MainProjects;