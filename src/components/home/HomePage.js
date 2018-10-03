import React, { Component } from 'react'
import NavMenu from '../navbar/NavMenu.js'

class HomePage extends Component {
  render() {
    return(
      <div>
        <NavMenu />
        <p>
          Status Bar wil go here!
        </p>
      </div>
    )
  }
}

export default HomePage
