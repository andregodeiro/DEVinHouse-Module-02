import { Main } from "./Components/Main/Main";
import { Navbar } from "./Components/Navbar/Navbar";
import { Searchbar } from "./Components/Searchbar/Searchbar";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Main />
    </div>
  );
}

export default App;
