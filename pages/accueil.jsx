import styles from '../styles/Accueil.module.css'
import Image from 'next/image'
import mypicture from "../public/mypicture.png"
import Head from 'next/head';

export default function Accueil() {
    return <>
    <Head>
    <title>Marouane Abderrahim - The person</title>
    <meta name="description" content="Page  d'accueil pour afficher une image et mes informations personel et mon cv"/>
    <meta property="og:title" content="Marouane Abderrahim - the person"/>
    <meta property="og:description" content="Page  d'accueil pour afficher une image et mes informations personel et mon cv "/>
    <meta property="og:image" content="http://localhost:3000/Marouane_logo_MA_awsome_black_background_awsome_gold_color_8k_I_d3d475bb-b9a3-49c3-a222-230ce453def0.png" />
  </Head>
    <div className={styles.theperson}>
        <h2>Marouane Abderrahim</h2>
        <div class="container">
        <Image className={styles.myimage} src={mypicture} alt="logo"   property="og:image"  loading="eager"/>
        </div>
        <p>Hello, my name is Marouane Abderrahim and I am a web developer. I have experience building websites and web applications using HTML, CSS, and JavaScript. I am passionate about creating clean and user-friendly designs, and I am always looking to learn new skills and technologies.
        </p>
        <a href='../public/RSai.pdf' download className={styles.downloadbutton}>
            RESUME
        </a>
    </div>
    </>
}