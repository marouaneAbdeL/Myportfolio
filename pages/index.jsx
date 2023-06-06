
import Head from 'next/head';
import Accueil from './accueil';

export default function Main() {
  return <>
    <Head>
      <title>Marouane Abderrahim - Accueil</title>
      <meta name="description" content="Page d'accueil" />
      <meta property="og:title" content="Marouane Abderrahim - Accueil" />
      <meta property="og:description" content="La page d'accueil" />
      <meta property="og:image" content="http://localhost:3000/Marouane_logo_MA_awsome_black_background_awsome_gold_color_8k_I_d3d475bb-b9a3-49c3-a222-230ce453def0.png" />
    </Head>

    <main >
      <Accueil />
    </main>
  </>
}