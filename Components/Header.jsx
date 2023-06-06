import Link from "next/link";
import Menu from "../Components/Menu";
import styles from "../styles/Header.module.css";
import Image from "next/image"
import logo from "../public/Marouane_logo_MA_awsome_black_background_awsome_gold_color_8k_I_d3d475bb-b9a3-49c3-a222-230ce453def0.png"
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" >
        <Image className={styles.imagelogo} src={logo} height={100} width={100} alt="logo" />
        </Link>
      <h1 className={styles.titre}></h1>
      <Menu />
    </header>
  )
}