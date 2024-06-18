import styles from "./css/cssRikai.module.scss"
import { Link } from "react-router-dom";

function CssRikai(){
  return(
    <>
    <div className={styles.back}>
      <div className={styles.box}>
          <p className = {styles.box__text}>
            CSS<br />
            完全に理解した
          </p>
        </div> 
        <div style={{height: "20px"}}></div>

        <div className={styles.notbox}>
          <p className = {styles.box__text}>
            CSS<br />
            理解していない
          </p>   
      </div>
      <div style={{height: "20px"}}></div>
      <Link to ="/" ><button className={styles.button}>戻る</button></Link>
    </div>
    </>
  )
}

export default CssRikai;