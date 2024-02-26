import { useState } from "react";
import styles from'src/styles/sitelayout_main.module.css';
import Event from 'src/components/Event.js';

function Content({children}) {
  const [sideMenuState, setsideMenuState] = useState(true);
  let handleClick =()=>{
    Event.callEvent('sideMenuToggle',sideMenuState)
    setsideMenuState(!sideMenuState)
  }
  return (
    <div className={styles.contentmain}>
          <div className={styles.mainContent}>
            {/* <button onClick={handleClick}>Click me!</button> */}
            {children}
      </div>
    </div>
  )
}

export default Content