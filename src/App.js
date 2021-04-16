import "./App.css";
import ThunkLoginContainer from "./containers/thunkLoginContainer";
import ThunkPostsContainer from "./containers/thunkPostsContainer";

function App() {
  return (
    <div>
      <ThunkLoginContainer />
      <hr />
      <ThunkPostsContainer />
    </div>
  );
}

export default App;
