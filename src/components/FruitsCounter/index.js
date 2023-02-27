// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="bg-container">
        <div className="second-container">
          <h1 className="main-heading">
            Bob ate <span className="mango-count">{count1}</span> mangoes
            <span className="mango-count"> {count2}</span> bananas
          </h1>
          <div className="images-buttons-container">
            <div className="image-and-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.mangoIncrement}
              >
                Eat Mango
              </button>
            </div>

            <div className="image-and-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.bananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
