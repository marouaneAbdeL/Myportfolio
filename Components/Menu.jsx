import Link from "next/link";
import styles from "../styles/Menu.module.css";
export default function Menu() {
  return (

    <nav className={styles.navbar}>
      <li><Link href="/programming" >The Programmer</Link></li>
      <li><Link href="/projects" >Projects</Link></li>
      <li><Link href="/contact" >Contact</Link> </li>
    </nav>

  )
}