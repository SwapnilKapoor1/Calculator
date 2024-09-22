import Main from "./components/main/main";
import { ScreenContext } from "./context/screen.context";


function App() {
  return(
  <>
    <ScreenContext>
        <Main/>
    </ScreenContext>
  </>
  );
}

export default App;
