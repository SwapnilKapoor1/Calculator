import Keypad from "../keypad/keypad";
import Screen from "../screen/Screen";
import style from "./main.module.css"

function Main() {
    return(
    <div className={style.main}>
          <Screen/>
          <Keypad/>
    </div>
    );
  }

export default Main;