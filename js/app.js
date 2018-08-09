class CharacterInfo extends React.Component {
    render() {
        return (
            <div className="container col-5 characterInfo">
                <div className="row">
                    <div className="col-4">
                        <img
                            className="img-fluid characterPortrait"
                            src={this.props.character.portrait}
                            alt="portrait" />
                    </div>
                    <div>
                        <h1>{this.props.character.name}</h1>
                        <h3>{this.props.character.primary_job}</h3>
                    </div> 
                    <div>
                        <h2>HP: {this.props.character.max_hp}</h2>
                        <h2>SP: {this.props.character.max_sp}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>Physical Attack: {this.props.character.phys_atk}</p>
                        <p>Elemental Attack: {this.props.character.elem_atk}</p>
                        <p>Physical Defense: {this.props.character.phys_def}</p>
                        <p>Elemental Defense: {this.props.character.elem_def}</p>
                    </div>
                    <div className="col-6">
                        <p>Accuracy: {this.props.character.accuracy}</p>
                        <p>Speed: {this.props.character.speed}</p>
                        <p>Critial: {this.props.character.critical}</p>
                        <p>Evasion: {this.props.character.evasion}</p>
                    </div>
                </div>
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
                <div className="container row characters">
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

