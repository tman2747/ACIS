// this uses css module for importing style.
// you have to import it as a object like "styles" or something then use it in the classname with curly braces
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <p>
          Made by{" "}
          <a href="https://tristonland.com" target="blank">
            TristonSquad
          </a>
        </p>
      </div>
    </>
  );
}
export default Footer;
