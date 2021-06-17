import {Component} from "react";
import CardList from "../../components/CardList/CardList";

class App extends Component {
    state = {
        monsters: [],
        searchField: '',
    };

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
            <>
                <input
                    type="search"
                    placeholder="search monsters"
                    onChange={(e) => this.setState({
                        searchField: e.target.value
                    })}
                />
                <CardList monsters={filteredMonsters}/>
            </>
        )
    }
}

export default App;
