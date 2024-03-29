import React, {Component} from 'react'
import './MainComponent.scss'

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Props: ', props);
    this.state = {
      appDesignNumber : 0,
      appGameDevelopersNumber : 0,
      app2GameDevelopersNumber : 0
    }
    this.gameDevelopers = [
      {
        name : 'Neil Druckmann',
        company : 'Naughty Dog',
        age : 40,
        occupation : 'Vice President',
        isGoodGameDeveloper: true,
        id : 0
      },
      {
        name : 'Sam Houser',
        company : 'Rockstar Games',
        age : 48,
        occupation : 'President',
        isGoodGameDeveloper: true,
        id : 1
      },
      {
        name : 'Hideo Kojima',
        company : 'Kojima Productions',
        age : 56,
        occupation : 'President',
        isGoodGameDeveloper: 'Genius',
        id : 2
      }
    ]
  }

  myOnClick1() {
    this.setState({appDesignNumber : 1});
  }

  myOnClick2() {
    this.setState({appDesignNumber : 2});
  }

  renderAppDeveloperBlockClick1() {
    this.setState({appGameDevelopersNumber : 1});
  }

  renderAppDeveloperBlockClick2() {
    this.setState({appGameDevelopersNumber : 2});
  }

  renderAppDeveloperBlockClick3() {
    this.setState({appGameDevelopersNumber : 3});
  }

  renderApp2DeveloperBlockClick1() {
    this.setState({app2GameDevelopersNumber : 1});
  }

  renderApp2DeveloperBlockClick2() {
    this.setState({app2GameDevelopersNumber : 2});
  }

  renderApp2DeveloperBlockClick3() {
    this.setState({app2GameDevelopersNumber : 3});
  }

  renderAppDeveloperBlock(name, company, occupation, age, id) {
    return(
      <div className="greenDesign_developerBlock">
        <h5 className="greenDesign_developerBlock-name">{this.gameDevelopers[id].name}</h5>
        <p className="greenDesign_developerBlock-age">Age: {this.gameDevelopers[id].age}</p>
        <p className="greenDesign_developerBlock-company">Company: {this.gameDevelopers[id].company}</p>
        <p className="greenDesign_developerBlock-occupation">Occupation: {this.gameDevelopers[id].occupation}</p>
      </div>
    );
  }

  renderApp2DeveloperBlock(name, company, occupation, age, id) {
    return(
      <div className="redDesign_developerBlock">
        <h5 className="redDesign_developerBlock-name">{this.gameDevelopers[id].name}</h5>
        <p className="redDesign_developerBlock-age">Age: {this.gameDevelopers[id].age}</p>
        <p className="redDesign_developerBlock-company">Company: {this.gameDevelopers[id].company}</p>
        <p className="redDesign_developerBlock-occupation">Occupation: {this.gameDevelopers[id].occupation}</p>
      </div>
    );
  }


  isGoodDeveloper(data) {
    alert('Is good developer? ' + data);
  }

  renderApp() {
    return(
      <div className={'blockDesign greenDesign'}>
        <h2 className="greenDesign-title">Game Developers</h2>
        <div className="greenDesign_buttons">
          <button className="greenDesign-btn" onClick={() => this.renderAppDeveloperBlockClick1()}>
            {this.gameDevelopers[0].name}
          </button>
          <button className="greenDesign-btn" onClick={() => this.renderAppDeveloperBlockClick2()}>
            {this.gameDevelopers[1].name}
          </button>
          <button className="greenDesign-btn" onClick={() => this.renderAppDeveloperBlockClick3()}>
            {this.gameDevelopers[2].name}
          </button>
        </div>
        {(this.state.appGameDevelopersNumber === 1) ? this.renderAppDeveloperBlock(this.gameDevelopers[0].name, this.gameDevelopers[0].company, this.gameDevelopers[0].occupation, this.gameDevelopers[0].age, this.gameDevelopers[0].id) : null}
        {(this.state.appGameDevelopersNumber === 2) ? this.renderAppDeveloperBlock(this.gameDevelopers[1].name, this.gameDevelopers[1].company, this.gameDevelopers[1].occupation, this.gameDevelopers[1].age, this.gameDevelopers[1].id) : null}
        {(this.state.appGameDevelopersNumber === 3) ? this.renderAppDeveloperBlock(this.gameDevelopers[2].name, this.gameDevelopers[2].company, this.gameDevelopers[2].occupation, this.gameDevelopers[2].age, this.gameDevelopers[2].id) : null}
        <div className="greenDesign_goodDevelopers">
          {this.gameDevelopers.map((developer, index) => {
            return(
              <p className="greenDesign_goodDevelopers-name" onClick={() => {this.isGoodDeveloper(developer.isGoodGameDeveloper)}}>
                {developer.name}
              </p>
            )
          })}
        </div>
      </div>
    );
  }

  renderApp2() {
    return(
      <div>
        <div className={'blockDesign redDesign'}>
          <h2 className="redDesign-title">Game Developers</h2>
          <div className="redDesign_buttons">
            <button className="redDesign-btn" onClick={() => this.renderApp2DeveloperBlockClick1()}>
              {this.gameDevelopers[0].name}
            </button>
            <button className="redDesign-btn" onClick={() => this.renderApp2DeveloperBlockClick2()}>
              {this.gameDevelopers[1].name}
            </button>
            <button className="redDesign-btn" onClick={() => this.renderApp2DeveloperBlockClick3()}>
              {this.gameDevelopers[2].name}
            </button>
          </div>
          {(this.state.app2GameDevelopersNumber === 1) ? this.renderApp2DeveloperBlock(this.gameDevelopers[0].name, this.gameDevelopers[0].company, this.gameDevelopers[0].occupation, this.gameDevelopers[0].age, this.gameDevelopers[0].id) : null}
          {(this.state.app2GameDevelopersNumber === 2) ? this.renderApp2DeveloperBlock(this.gameDevelopers[1].name, this.gameDevelopers[1].company, this.gameDevelopers[1].occupation, this.gameDevelopers[1].age, this.gameDevelopers[1].id) : null}
          {(this.state.app2GameDevelopersNumber === 3) ? this.renderApp2DeveloperBlock(this.gameDevelopers[2].name, this.gameDevelopers[2].company, this.gameDevelopers[2].occupation, this.gameDevelopers[2].age, this.gameDevelopers[2].id) : null}
          <div className="redDesign_goodDevelopers">
            {this.gameDevelopers.map((developer, index) => {
              return(
                <p className="redDesign_goodDevelopers-name" onClick={() => {this.isGoodDeveloper(developer.isGoodGameDeveloper)}}>
                  {developer.name}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

  topMessage = () => {
    return (
      <p className={"Content-topText"}>{this.props.myName + ', thanks for test:'})</p>
    );
  }

  render() {
    return(
      <div className="Content">
        {this.topMessage()}
        <form className={'form'}>

        </form>
        <div className="Buttons">
          <button className="Buttons-btn1" onClick={() => {
            this.setState({app2GameDevelopersNumber : 0});
            return this.myOnClick1();
          }}>
            First Design
          </button>
          <button className="Buttons-btn2" onClick={() => {
            this.setState({appGameDevelopersNumber : 0});
            return this.myOnClick2();
          }}>
            Second Design
          </button>
        </div>
        {(this.state.appDesignNumber === 1) ? this.renderApp() : null}
        {(this.state.appDesignNumber === 2) ? this.renderApp2() : null}
      </div>
    )
  }
}