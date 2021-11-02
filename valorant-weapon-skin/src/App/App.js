import { Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Arsenal from "../Components/Arsenal";
import NavBar from "../Components/Navigation";
import Weapon from "../Components/Weapon";
import Container from "react-bootstrap/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weaponList, setWeaponList] = useState([]);
  const [bigImage, setBigImage] = useState();
  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch("https://valorant-api.com/v1/weapons");
      const json = await res.json();
      setWeaponList(json.data);
    };
    makeApiCall();
  }, []);
  const handleBigImage = (data) => {
    setBigImage(data);
  };
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Container id="main">
        <Route
          path="/arsenal"
          exact
          render={() => (
            <Arsenal weaponList={weaponList} onClick={handleBigImage} />
          )}
        />
        <Route
          path="/arsenal/:weapon"
          exact
          render={(routerProps) => (
            <Weapon
              {...routerProps}
              weaponList={weaponList}
              bigImage={bigImage}
              onClick={handleBigImage}
            />
          )}
        />
        <Redirect to="/arsenal" />
      </Container>
    </div>
  );
}

export default App;
