import React, {Component} from 'react';
import CardList from './CardList';
import {doggos} from './doggos';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    
    constructor () {
        super ()
        this.state = {
            dogs: doggos,
            searchfield: ''
        }
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
            <CardList dogs={filteredDoggos} />
        </div>
        );
    
    }

}

export default App;