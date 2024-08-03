import { useEffect, useState } from "react"
import "./App.css"
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box"

const App = () => {
  const [searchField, setSearchField] = useState("") // [value, setState]
  const [monsters, setMonsters] = useState([])

  console.log("App rander")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsters) => {
        setMonsters(monsters)
      })
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  const filteredMonsters = (monsters) => {
    return monsters.filter((monster) => {
      const filteredMonstersData = monster.name
        .toLocaleLowerCase()
        .includes(searchField)
      return filteredMonstersData
    })
  }

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className={"monsters-search-box"}
        onChangeHandler={onSearchChange}
        placeholder="search-box"
      />
      <div>
        <CardList monsters={filteredMonsters(monsters)} />
      </div>
    </div>
  )
}

export default App
/*
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchFild: "",
    }

    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsters) => {
        this.setState({ monsters, searchField: "" })
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    console.log("onSearchChange searchField : ", searchField)
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log("render")
    console.log("searchFild : ", this.state.searchFild)
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter((monster) => {
      console.log("filteredMonster searchFild : ", searchField)
      const result = monster.name.toLocaleLowerCase().includes(searchField)
      return result
    })
    console.log("filteredMonster : ", filteredMonster)
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className={"monsters-search-box"}
          onChangeHandler={this.onSearchChange}
          placeholder="search-box"
        />
        <div>
          <CardList monsters={filteredMonster} />
        </div>
      </div>
    )
  }
}

export default App
*/
