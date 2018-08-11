class PartyInfo extends React.Component {
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
        <div className="row">
        {
        this.props.party.map((character) => {
          return (
          <PartyCharacter character={character} />
          )
        })
        }
        </div>
      </div>
    ); 
  }
}
