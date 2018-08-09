class CharacterInfo extends React.Component {
    render() {
        return (
            <div className="container col-3">
                <h2>{this.props.character.name}</h2>
                <h3>{this.props.character.primary_job}</h3>
                <p>HP: {this.props.character.max_hp}</p>
                <p>SP: {this.props.character.max_sp}</p>
                <p>Physical Attack: {this.props.character.phys_atk}</p>
                <p>Elemental Attack: {this.props.character.elem_atk}</p>
                <p>Physical Defense: {this.props.character.phys_def}</p>
                <p>Elemental Defense: {this.props.character.elem_def}</p>
                <p>Accuracy: {this.props.character.accuracy}</p>
                <p>Speed: {this.props.character.speed}</p>
                <p>Critial: {this.props.character.critial}</p>
                <p>Evasion: {this.props.character.evasion}</p>
                <button
                    type="button"
                    className="btn btn-warning">
                    Add to Party
                </button>
            </div>
        );
    }
}

class PartyInfo extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Party</h2>
                <button type="button" className="btn btn-danger">Reset</button>
            </div>
        ); 
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            party: null
        };
        this.resetParty = this.resetParty.bind(this);
    }
    resetParty() {
        console.log("reset party");
        this.setState({ party: null });
    }
    render() {
        return (
            <div>
                <h1>Octopath Traveler Party Planner</h1>
                <PartyInfo></PartyInfo>
                <div className="container row">
                    <CharacterInfo character={Ophilia}></CharacterInfo>
                    <CharacterInfo character={Cyrus}></CharacterInfo>
                    <CharacterInfo character={Tressa}></CharacterInfo>
                    <CharacterInfo character={Olberic}></CharacterInfo>
                    <CharacterInfo character={Primrose}></CharacterInfo>
                    <CharacterInfo character={Alfyn}></CharacterInfo>
                    <CharacterInfo character={Therion}></CharacterInfo>
                    <CharacterInfo character={H_aanit}></CharacterInfo>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
);

