import "./App.css";
import IdCard from "./components/IdCard";

const usersArray = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: "178",
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: "Delores ",
    firstName: "Obrien",
    gender: "female",
    height: "172",
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]
function App() {

  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <div>
      <IdCard idCard={usersArray[0]}/>
      </div>
      <div>
      <IdCard idCard={usersArray[1]}/>
      </div>
    </div>
  );
}

export default App;
