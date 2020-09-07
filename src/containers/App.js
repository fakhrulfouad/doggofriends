import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';

class App extends Component {
    
    constructor () {
        super ()
        this.state = {
            dogs: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ dogs: users})});
      }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render () {
        const filteredDoggos = this.state.dogs.filter(dogs => {
            return dogs.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
            <h1 className='f1' >Doggo Friends</h1>
            <p className='f2 title' >Connect with Nearby Furry Friends!</p>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <ErrorBoundary>
              <CardList dogs={filteredDoggos} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;