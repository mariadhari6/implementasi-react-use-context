import './App.css';
import { createContext, useContext, useState } from 'react';
const UserContext = createContext();
function App() {
  const [user, setUser] = useState("Mari")
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component1 />
    </UserContext.Provider>
  );
}
function Component1() {
  return <Component2 />
}
function Component2() {
  return <Component3 />
}
function Component3() {
  const { user, setUser } = useContext(UserContext)
  const changeUser = () => {
    if (user === "Mar'i") {
      setUser("Mar'i Adhari")
    }
    else {
      setUser("Mar'i")
    }
  }
  return (
    <div>
      component 3
      <h2> {user} </h2>

      <button onClick={changeUser}>Change user</button>
    </div>
  )
}
export default App;
