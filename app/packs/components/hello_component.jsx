import React from 'react'

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedNames: [this.randomName()]
    }

    this.tryNewName = this.tryNewName.bind(this);
  }

  tryNewName() {
    this.setState(
      state => ({
        displayedNames: [
          ...state.displayedNames,
          this.randomName()
        ]
      })
    )
  }

  randomName() {
    const index = Math.floor(Math.random() * this.props.names.length)
    return this.props.names[index]
  }

  renderNameListElements() {
    const displayedNames = this.state.displayedNames
    return displayedNames.map(
      (name, index) => <li key={index} className="list-item">...{name}...?</li>
    )
  }

  render() {
    return (
      <div className="hello-component">
        <h3 className="header">Hello...</h3>
        <div className="list-container">
          <ul className="list">
            {this.renderNameListElements()}
          </ul>
        </div>
        <button onClick={this.tryNewName}>
          Nope
        </button>
      </div>
    );

  }
}
