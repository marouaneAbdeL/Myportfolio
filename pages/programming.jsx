import styles from '../styles/Programming.module.css'
import Image from 'next/image'
import logos from '../public/logos.png'
import Head from 'next/head';
export default function Programming () {
  

    return <>
<Head>
    <title>Marouane Abderrahim - Programming</title>
    <meta name="description" content="Page pour parler plus de mes competences en programation"/>
    <meta property="og:title" content="Marouane Abderrahim - Programming"/>
    <meta property="og:description" content="Page pour parler plus de mes competences en programation"/>
    <meta property="og:image" content="http://localhost:3000/Marouane_logo_MA_awsome_black_background_awsome_gold_color_8k_I_d3d475bb-b9a3-49c3-a222-230ce453def0.png" alt="MarouaneLogo"/>

  </Head>

    <div className={styles.programming}>
    <h2>The Programmer</h2>
    <Image src={logos} alt="react" width={200} height={100}/>
    <p>I have been programming for over 5 years. I have experience building websites and web applications using HTML, CSS, and JavaScript. I am passionate about creating clean and user-friendly designs, and I am always looking to learn new skills and technologies. </p>
    </div>
    </>
}