import React, {Component} from 'react'
import './mainComponent.scss'

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appDesignNumber : 0
    }
  }

  myOnClick1() {
    this.setState({appDesignNumber : 1});
  }

  myOnClick2() {
    this.setState({appDesignNumber : 2});
  }

  renderApp() {
    return(
      <div className={'blockDesign greenDesign'}>

      </div>
    );
  }

  renderApp2() {
    return(
      <div className={'blockDesign redDesign'}>

      </div>
    );
  }

  render() {
    return(
      <div className="Content">
        <div className="Buttons">
          <button className="Buttons-btn1" onClick={() => this.myOnClick1()}>
            First Design
          </button>
          <button className="Buttons-btn2" onClick={() => this.myOnClick2()}>
            Second Design
          </button>
        </div>
        {(this.state.appDesignNumber === 1) ? this.renderApp() : null}
        {(this.state.appDesignNumber === 2) ? this.renderApp2() : null}
      </div>
    )
  }
}
