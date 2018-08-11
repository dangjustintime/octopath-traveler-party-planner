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
