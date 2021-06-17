import {Component} from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox";

import styles from './App.module.css';

class App extends Component {
    state = {
        monsters: [],
        searchField: '',
    };

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({monsters: data}));
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(({name}) => {
            return name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className={styles.App}>
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
