class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      party: []
    };
    this.resetParty = this.resetParty.bind(this);
    this.addToParty = this.addToParty.bind(this);
    this.changeJob = this.changeJob.bind(this);
  }
  resetParty() {
    console.log("reset party");
    this.setState({ party: [] });
    console.log(this.state.party);
  }
  changeJob(character, job) {
    if (job.max_hp) {
        character.max_hp *= job.max_hp;
    }
    if (job.max_sp) {
        character.max_sp *= job.max_sp;
    }
    if (job.phys_atk) {
        character.phys_atk *= job.phys_atk;
    }
    if (job.elem_atk) {
        character.elem_atk *= job.elem_atk;
    }
    if (job.phys_def) {
        character.phys_def *= job.phys_def;
    }
    if (job.elem_def) {
        character.elem_def *= job.elem_def;
    }
    if (job.accuracy) {
        character.accuracy *= job.accuracy;
    }
    if (job.speed) {
        character.speed *= job.speed;
    }
    if (job.critical) {
        character.critical *= job.critical;
    }
    if (job.evasion) {
        character.evasion *= job.evasion;
    }
    if (job.evasion) {
        character.evasion *= job.evasion;
    }
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

