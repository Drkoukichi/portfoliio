import styles from "./css/cssRikai.module.scss"

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
      </div>
    </>
  )
}

export default CssRikai;