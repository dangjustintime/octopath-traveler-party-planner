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
                    onClick={() => this.props.addToParty(this.props.character)}
                    type="button"
                    className="btn btn-warning">
                    Add to Party
                </button>
            </div>
        );
    }
}

class PartyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            party: this.props.party
        }
    }
    render() {
        return (
            <div className="container">
                <h2>Party</h2>
                <button
                    onClick={() => this.props.resetParty()}
                    type="button"
                    className="btn btn-danger">
                    Reset
                </button>
                {
                this.state.party.map((character) => {
                    return (
                    <CharacterInfo character={character} />
                    )
                })
                }
            </div>
        ); 
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
            party: []
        };
        this.resetParty = this.resetParty.bind(this);
        this.addToParty = this.addToParty.bind(this);
    }
    resetParty() {
        console.log("reset party");
        this.setState({ party: [] });
        console.log(this.state.party);
    }
    addToParty(character) {
        const new_party = this.state.party;
        new_party.push(character);
        this.setState({
            party: new_party
        });
        console.log(this.state.party);
    }
    render() {
        return (
            <div>
                <h1>Octopath Traveler Party Planner</h1>
                <PartyInfo
                    resetParty={this.resetParty}
                    party={this.state.party}>
                 </PartyInfo>
                <div className="container row characters">
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Ophilia}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Cyrus}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Tressa}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Olberic}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Primrose}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Alfyn}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={Therion}>
                    </CharacterInfo>
                    <CharacterInfo
                        addToParty={this.addToParty}
                        character={H_aanit}>
                    </CharacterInfo>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
);

