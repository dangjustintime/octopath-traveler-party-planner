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
        if(this.state.party.size == 4) {
            alert("Party can only have 4 characters");
        } else {
            const new_party = this.state.party;
            new_party.push(character);
            this.setState({
                party: new_party
            });
            console.log(this.state.party);
        }
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

