import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/homecomponent";
import CardComponent from "./components/cardcomponent";

//Marcel Rodriguez
//03-17-2023
//Social Media Dashboard
//This application will show a social dashboard that is responsive and styled
//Peer review by Maddie: The site itself looks great in my opinion, and the application works as it should. The switch functions, and the hover effect as well. Everything seems to be in the right position with appropriate margins and spacing, and aside from certain items looking too large, like the switch button for example, it seems very close to the prototype we were given. Really good job!!

function App() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  useEffect(() => {
    const app = document.getElementById("app");
    if (isToggled) {
      app.style.backgroundColor = "#1D2029";
    } else {
      app.style.backgroundColor = "white";
    }
  }, [isToggled]);

  return (
    <BrowserRouter>
      <div id="app" className="App">
        <Routes>
          <Route path="/" element={<HomeComponent isToggled={isToggled} handleToggle={handleToggle} />} />
        </Routes>
          <CardComponent isToggled={isToggled} handleToggle={handleToggle} 
            social={{ at: '@nathanf' }}
            number={{ number1: '1987', number2: '1004', number3: '11k', number4: '8239' }}
            overview={{ overview1:'87', overview2:'52', overview3:'5462', overview4:'52k', overview5:'117', overview6:'507', overview7:'107', overview8:'1407'}}
          />
      </div>
    </BrowserRouter>
  );
}

export default App;