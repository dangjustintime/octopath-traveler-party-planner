class PartyCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: this.props.character
        }
    }
    render() {
        return (
            <div className="col-3">
                <img src={this.state.character.portrait}/>
            </div>
        )
    }
}
