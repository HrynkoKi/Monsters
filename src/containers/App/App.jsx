import {Component} from "react";
import CardList from "../../components/CardList/CardList";

class App extends Component {
    state = {
        monsters: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({monsters: data}));
    }


    render() {
        return (
            <>
                <CardList monsters={this.state.monsters}/>
            </>
        )
    }
}

export default App;
