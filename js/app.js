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
    if (this.state.party.length == 4) {
      alert("Party can only have 4 characters");
    } else if (this.state.party.includes(character)) {
      alert("Character is already in party");
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
            character={OPHILIA}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={CYRUS}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={TRESSA}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={OLBERIC}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={PRIMROSE}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={ALFYN}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={THERION}>
          </CharacterInfo>
          <CharacterInfo
            addToParty={this.addToParty}
            character={H_AANIT}>
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

