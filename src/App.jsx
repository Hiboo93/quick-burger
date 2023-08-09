import { Outlet, useMatch } from "react-router-dom";
import "./App.css";
import PageLogin from "./components/pages/login/PageLogin.jsx";

function App() {

  const racine = useMatch('/')

  return (
    <>
      <div>
        { racine ? <PageLogin/> : <Outlet />}
      </div>
    </>
  );
}
export default App;
