import ErrImg from "./../assets/404.svg";
import styles from "./css/four.module.scss";

function Error404() {
  return (
    <body>
      <div className={styles.bg404}>
        <h1>404 Not Found</h1>
        <p>お探しのページは見つかりませんでした。</p>
        <img src={ErrImg} alt="404" />
      </div>
    </body>
  );
}

export default Error404;
