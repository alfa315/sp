import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'
import ProgressBar from './ProgressBar.js'
import Dropdown from './Dropdown.js'


class HomePage extends Component {
  state = {
    activeItem: 1,
    integration: ["Ads","Analytics","Forms","Site Customization", "Site Optimization"],
    default: "Ads"
  }

  updateInstructions = () => {
    if (document.getElementById('one').className === 'active') {
      document.getElementById('nextSteps').innerHTML = "Hi, sit tight we are setting up initial configurations for your tag now! If you have any immediate questions, please do not hesitate to contact the Demandbase team."
    }

    if (document.getElementById('two').className === 'active') {
      document.getElementById('nextSteps').innerHTML = "Step two of integration will go here"
    }

    if (document.getElementById('three').className === 'active') {
      document.getElementById('nextSteps').innerHTML = "Step three of the integration will go here!"
    }

    if (document.getElementById('four').className === 'active') {
      document.getElementById('nextSteps').innerHTML = "Step four of the integration will go here!"
    }

    if (document.getElementById('five').className === 'active') {
      document.getElementById('nextSteps').innerHTML = "Step five of the integration will go here!"
    }
  }

  handleClick = (event) => {
    document.getElementsByClassName('active')[0].className = 'inactive'
    event.target.className = "active"
    this.setState({
      activeItem: event.target.innerHTML
    })
    this.updateInstructions()
  }

  handleChange = (e) => {
    this.setState({
      default: e.target.value
    })
  }

  render() {
    return(
      <div>
        <NavMenu
        />

        <Dropdown
          integrations = {this.state.integration}
          handleChange = {this.handleChange}
        />

        <ProgressBar
          activeItem = {this.state.activeItem}
          handleClick = {this.handleClick}
          selected = {this.state.default}
        />

        <p id="nextSteps">Hi, sit tight we are setting up initial configurations for your tag now! If you have any immediate questions, please do not hesitate to contact the Demandbase team.</p>
      </div>
    )
  }
}

export default HomePage
