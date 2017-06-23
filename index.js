function selectAll(event) {
  event.target.select();
}

function Input(props) {
  return(
    <p>
      <span className="input-label">{props.label}</span>
      <input type="number" className="input" value={props.state} onChange={props.onSet} onFocus={selectAll} />
    </p>
  )
}

class Gear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chainring: 44,
      cog: 16
    }

    this.handleChainringChange = this.handleChainringChange.bind(this);
    this.handleCogChange = this.handleCogChange.bind(this);
  }

  handleChainringChange(event) {
    this.setState({chainring: event.target.value});
  }

  handleCogChange(event) {
    this.setState({cog: event.target.value});
  }

  get ratio() {
    return this.state.chainring / this.state.cog;
  }

  render() {
    return(
      <div className="contentwrap">
        <div className="formwrap center">
          <form>
            <Input label="Chainring Size" state={this.state.chainring} onSet={this.handleChainringChange} />
            <Input label="Cog Size" state={this.state.cog} onSet={this.handleCogChange} />
          </form>
        </div>
        <p className="result">{this.ratio}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Gear />,
  document.getElementById('app')
);
