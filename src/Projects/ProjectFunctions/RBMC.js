import ProjectTemplate from '../ProjectTemplate'

function RBMC(){
    
    function rbmctext() {
        return <div>
            For this project, we created a Deep Learning agent that played (and competed in) <a href='https://rbc.jhuapl.edu/gameRules'>Reconnaissance Blind Multi-Chess (RBMC)</a>,
            a modification of the original chess game that a few twists, the most
            prominent one being that at each turn, each player is allowed to observe only a 3x3 tile area of the entire 8x8 tile area of the board in each turn. To this aim, 
            we implemented a Neural Network Guided <a href='https://en.wikipedia.org/wiki/Monte_Carlo_tree_search'>Monte Carlo Tree Search</a> (NN-MCTS), along with a <a href='https://en.wikipedia.org/wiki/Particle_filter'>Particle Filter</a> to maintain and update possible board states at each turn. 
            The NN-MCTS architecture was heavily inspired from <a href='http://airesearch.com/wp-content/uploads/2016/01/deepmind-mastering-go.pdf'>AlphaGo</a>, a Neural Network that defeated all existing Go programas and defeated the European Go champion 5-0.
        </div>
    }
    const topText = 'RBMC Deep Learning Agent'

    const prop = {
        description: rbmctext(),
        header: topText
    }

    return <ProjectTemplate {...prop}/>
}

export default RBMC;