import Intro from './Intro.js'
import WhatDoIDo from './WhatDoIDo.js'
import {useState, useEffect} from 'react'
import {hr} from 'react-bootstrap';
import Infrastructure from '../Infrastructure.js'
import Hobbies from './hobbies.js'

function HomePage(){
    function getRenderElements(){
        return <div>
            <Intro/>
            <WhatDoIDo/>
            <Hobbies/>
            </div>
    }
    return (

        <Infrastructure renderElement={getRenderElements()}/>
        );
}

export default HomePage;