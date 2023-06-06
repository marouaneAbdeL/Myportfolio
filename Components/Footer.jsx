import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p> © 2023 Marouane Abderrahim</p>
      <div>
      <a href="https://www.facebook.com/yourpage">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/marouane_larh/">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/yourpage">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/yourpage">
        <FaTwitter />
      </a>
      
      </div>
    </footer>
  )
}