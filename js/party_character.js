class PartyCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.character,
      secondary_job: "None",
      bonus: {
        max_hp: 1,
        max_sp: 1,
        phys_atk: 1,
        elem_atk: 1,
        phys_def: 1,
        elem_def: 1,
        accuracy: 1,
        speed: 1,
        critical: 1,
        evasion: 1
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    let job_bonus = {};
    switch (this.state.secondary_job) {
      case "None":
        job_bonus = NO_BONUS;
        break;
      case "Cleric":
        job_bonus = CLERIC_BONUS;
        break;
      case "Scholar":
        job_bonus = SCHOLAR_BONUS;
        break;
      case "Merchant":
        job_bonus = MERCHANT_BONUS;
        break;
      case "Warrior":
        job_bonus = WARRIOR_BONUS;
        break;
      case "Dancer":
        job_bonus = DANCER_BONUS;
        break;
      case "Apothecary":
        job_bonus = APOTHECARY_BONUS;
        break;
      case "Thief":
        job_bonus = THIEF_BONUS;
        break;
      case "Hunter":
        job_bonus = HUNTER_BONUS;
        break;
    }
    this.setState({
      bonus: job_bonus
    });
    console.log(this.state.bonus);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({
      secondary_job: event.target.value
    });
  }
  render() {
    return (
      <div className="col-3">
        <img src={this.props.character.portrait}/>
        <h1>{this.props.character.name}</h1>
        <h3>Primary Job: {this.props.character.primary_job}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Secondary Job: 
            <select value={this.state.secondary_job}
              onChange={this.handleChange}>
              <option value="None">None</option>
              { (this.props.character.primary_job == "Cleric") ?
                null : <option value="Cleric">Cleric</option> }
              { (this.props.character.primary_job == "Scholar") ?
                null : <option value="Scholar">Scholar</option> }
              { (this.props.character.primary_job == "Merchant") ?
                null : <option value="Merchant">Merchant</option> }
              { (this.props.character.primary_job == "Warrior") ?
                null : <option value="Warrior">Warrior</option> }
              { (this.props.character.primary_job == "Dancer") ?
                null : <option value="Dancer">Dancer</option> }
              { (this.props.character.primary_job == "Apothecary") ?
                null : <option value="Apothecary">Apothecary</option> }
              { (this.props.character.primary_job == "Thief") ?
                null : <option value="Thief">Thief</option> }
              { (this.props.character.primary_job == "Hunter") ?
                null : <option value="Hunter">Hunter</option> }
            </select>
          </label>
          <input type="submit" value="Change Job"/>
        </form>
        <p>HP: 
            {this.props.character.max_hp * this.state.bonus.max_hp}</p>
        <p>SP: 
            {this.props.character.max_sp * this.state.bonus.max_sp}</p>
        <p>Physical Attack: 
            {this.props.character.phys_atk * this.state.bonus.phys_atk}</p>
        <p>Elemental Attack: 
            {this.props.character.elem_atk * this.state.bonus.elem_atk}</p>
        <p>Physical Defense: 
            {this.props.character.phys_def * this.state.bonus.phys_def}</p>
        <p>Elemental Defense: 
            {this.props.character.elem_def * this.state.bonus.elem_def}</p>
        <p>Accuracy: 
            {this.props.character.accuracy * this.state.bonus.accuracy}</p>
        <p>Speed: 
            {this.props.character.speed * this.state.bonus.speed}</p>
        <p>Critial: 
            {this.props.character.critical * this.state.bonus.critical}</p>
        <p>Evasion: 
            {this.props.character.evasion * this.state.bonus.evasion}</p>
      </div>
    )
  }
}
