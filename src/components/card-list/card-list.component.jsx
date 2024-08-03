import Card from "../card/card.component"
import "./card-list.styles.css"

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((ele) => {
        return <Card key={ele.id} monster={ele} />
      })}
    </div>
  )
}

export default CardList
