import React, {Component} from 'react'

export default class Keypad extends Component {
  render() {
    return(
      <button onFocus={() => console.log("Good!")} onBlur={() => console.log('Hey! Eyes on me!')} />
    )
  }
}


// Code EyesOnMe Component Here
