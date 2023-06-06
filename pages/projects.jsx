import styles from '../styles/Projects.module.css'
import Image from "next/image"
import projet01 from "../public/projet01.png"
import projet02 from "../public/hotel.image.png"
import Head from 'next/head';

export default function Projects() {


    return <>
    <Head>
    <title>Marouane Abderrahim - Projects</title>
    <meta name="description" content="Afficher tous les projets avec une seule image, une description et technologies utiliser"/>
    <meta property="og:title" content="Marouane Abderrahim - Projects"/>
    <meta property="og:description" content="Afficher tous les projets avec une seule image, une description et technologies utiliser"/>
    <meta property="og:image" content="http://localhost:3000/Marouane_logo_MA_awsome_black_background_awsome_gold_color_8k_I_d3d475bb-b9a3-49c3-a222-230ce453def0.png" alt="MarouaneLogo"/>

  </Head>

  <section className={styles.presentation}>
  <Image className={styles.image} src={projet01} alt="Marouane" property="og:image" loading="eager"/>
            
            <div>
                <h2>Desktop application to manage interns</h2>
                <p>
                Designed to help businesses and organizations keep track of the interns that are currently working with them.                </p>
                <p>
                Programming languages: C#
                    XAML: for developing the user interface and layout
                    .NET Framework: for building the applications core functionality
                    Windows Presentation Foundation (WPF) : A framework for creating rich, interactive desktop applications.
                    Object-Relational Mapping (ORM) libraries: Entity Framework, NHibernate
                    Database management systems: sqlit3
                    Dependency Injection: Unity
                    UI controls and libraries : Material Design In XAML Toolkit, MahApps.Metro, Dragablz.
                    Version Control system: Git, SVN, Mercurial
                    software testing framework : MSTest, NUnit.
                </p>
            </div>
        </section>
        
        <section className={styles.presentation + ' ' +  styles.inverse}>
        <Image className={styles.image} src={projet02} alt="imgggg"property="og:image" loading="eager" />            
            <div>
                <h2>Flytopia</h2>
                 <p>
                Designed to help businesses and organizations keep track of the interns that are currently working with them.                </p>
                <p>
                Java, Javascript, Express (JavaScript), MongoDB
                </p>
            </div>
        </section>
    </>
}