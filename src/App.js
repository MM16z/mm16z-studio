import "./SASS/SRC/app.scss";

import Home from "./COMPONENTS/HOME/Home";
import CustomCursor from "./HOOKS/Customcursor";

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Home />
    </div>
  );
}

export default App;
