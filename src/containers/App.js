import React, {Component} from 'react';
import CardList from '../components/CardList';
// Does not contain default export so we have to use {}
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';




// Declaring a class
class App extends Component {
    constructor () {
        // In order to use this we have to call super 
        // which calls the constructor of the component
        super()
        // This state will change and will live in parent component
        this.state = {
            robots: [],
            searchfield:'',
        }
    }

    // Everytime the input changes to trigger event
    // This is part of the react so we are not using =>
    componentDidMount() {
        // Make a request to the server and fetch whatever the users are
        fetch('https://jsonplaceholder.typicode.com/users')
        // Get a response
        .then(response => response.json())
        // Getting and updating users with setState
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) =>  {
        this.setState({searchfield: event.target.value})
    }

    render () {
        // If the name of the robots in lowercase includes the searchfield 
        // then return them
        const {robots, searchfield} =this.state;
        const filtertedRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // Doing the ternary operator instead of if statement
        return !robots.length ? 
            // Return a loading bar  
            <h1>Loading</h1> :
            // Else returun this
             (
            // Center everything
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/> 
                <Scroll> 
                    <ErrorBoundry>
                    <CardList robots={filtertedRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}


export default App;