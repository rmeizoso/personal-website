import ProjectTemplate from '../ProjectTemplate'
import spike from '../../images/spike_zone.jpg'
function Spike(){
  
    function rbmctext() {
        return  <p>Given a warehouse with known object locations, how can we get a <a href='https://en.wikipedia.org/wiki/Mobile_manipulator'>mobile manipulator</a> to succesfully navigate around it to fetch and drop items on designated spots? We answer this question with <a href='https://www.dji.com/pr/robomaster-ep'>Spike</a>,
             a 4 wheeled manipulator endowed with an <a href='https://www.intelrealsense.com/depth-camera-d435i/'>RGB-D camera</a>. By building a safe map of the warehouse with <a href='https://en.wikipedia.org/wiki/Voronoi_diagram#:~:text=In%20mathematics%2C%20a%20Voronoi%20diagram,%2C%20sites%2C%20or%20generators).&text=The%20Voronoi%20diagram%20of%20a,dual%20to%20its%20Delaunay%20triangulation.'>Voronoi Diagrams</a>,
              estimating the current pose of the robot with particle filtering, 
              <a href='https://www.mathworks.com/help/deeplearning/ref/resnet50.html;jsessionid=548ee532cdea00c9ea74ac797047#:~:text=ResNet%2D50%20is%20a%20convolutional,%2C%20pencil%2C%20and%20many%20animals.'>detecting an object interest</a> and estimating its location with the RGB-D camera and <a href='https://en.wikipedia.org/wiki/Pinhole_camera_model#:~:text=The%20pinhole%20camera%20model%20describes,are%20used%20to%20focus%20light.'>Computer Vision</a> techniques,
             and grabbing and dropping the object with <a href='https://en.wikipedia.org/wiki/Inverse_kinematics'>inverse kinematics</a> for the robot arm, 
             Spike can succesfully move, fetch, and retrieve any object we want from the warehouse.</p>
        
    }

    const topText = 'Spike: The Warehouse Caretaker'

    const prop = {
        description: rbmctext(),
        header: topText,
        image: spike,
        name: 'Spike'
    }

    return <ProjectTemplate {...prop}/>
}

export default Spike;