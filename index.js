function selectAll(event) {
  event.target.select();
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
            <p>
              <span className="input-label">Chainring size</span>
              <input type="number" className="input" value={this.state.chainring} onChange={this.handleChainringChange} onFocus={selectAll} />
            </p>
            <p>
              <span className="input-label">Cog size</span>
              <input type="number" className="input" value={this.state.cog} onChange={this.handleCogChange} onFocus={selectAll} />
            </p>
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
