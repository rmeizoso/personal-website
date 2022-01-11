import ProjectTemplate from '../ProjectTemplate'
import quadrotor from '../../images/quadrotor.jpg'
function Controls(){
    
    function controlsText() {
        return <div>
            Given a Two-dimensional version of a <a href='https://en.wikipedia.org/wiki/Quadcopter'>quadcopter</a> (it can either move up or rotate to the sides)
             with <a href='https://en.wikipedia.org/wiki/Nonlinear_system#:~:text=Nonlinear%20differential%20equations%5Bedit%5D'>nonlinear system dynamics</a>, how do we set up a <a href='https://en.wikipedia.org/wiki/Trajectory'>trajectory following</a> controller? And, how can we ensure that,
              given an input, the quadrotor stays within a set safe zone? To answer the first question, 
              we can try to either <a href='https://en.wikipedia.org/wiki/Linearization#:~:text=In%20the%20study%20of%20dynamical,physics%2C%20economics%2C%20and%20ecology.'>linearize</a> the system and create  linear controllers for trajectories
               near the starting position, or use <a href='https://en.wikipedia.org/wiki/Feedback_linearization'>feedback linearization</a> to avoid the errors associatied 
               with straight linearization. To answer the second question, we can leverage <a href='https://www.sciencedirect.com/science/article/pii/S2405896315024106#:~:text=A%20control%20barrier%20function%20enables,using%20a%20Lyapunov%2Dlike%20condition.&text=A%20control%20barrier%20function%20can,objective%20subject%20to%20safety%20guarantees.'>Control Barrier Functions
               </a> to specify a safe set or region that the quadcopter cannot go into.
            </div>
    }
    const topText = 'Quadcopter Control'

    const prop = {
        description: controlsText(),
        header: topText,
        image: quadrotor,
        name: 'Quadcopter'
    }

    return <ProjectTemplate {...prop}/>
}

export default Controls;