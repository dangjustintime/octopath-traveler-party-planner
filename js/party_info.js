class PartyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            party: this.props.party
        }
        this.handleResetParty = this.handleResetParty.bind(this);
    }
    handleResetParty() {
       this.props.resetParty();
       this.setState({ party: [] })
    }
    render() {
        return (
            <div className="container">
                <h2>Party</h2>
                <button
                    onClick={this.handleResetParty}
                    type="button"
                    className="btn btn-danger">
                    Reset
                </button>
                <div className="row">
                {
                this.state.party.map((character) => {
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
