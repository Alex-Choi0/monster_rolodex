import { Component } from "react"
import Card from "../card/card.component"
import "./card-list.styles.css"

class CardList extends Component {
  constructor() {
    super()
  }

  render() {
    const { monsters } = this.props
    console.log("CardList monsters : ", monsters)
    return (
      <div className="card-list">
        {monsters.map((ele) => {
          return <Card monster={ele} />
        })}
      </div>
    )
  }
}

export default CardList
