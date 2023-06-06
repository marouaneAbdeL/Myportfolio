import Head from "next/head";
import FormLibrary from "../components/FormLibrary";

export default function Contact() {
    return <>
        <Head>
            <title>Marouane Abderrahim | Contact</title>
            <meta name="description" content="Page pour permettre aux gens intererses par mes projects de me contacter a travers la form de type Library" />
            <meta property="og:title" content="Marouane Abderrahim | Contact" />
            <meta property="og:description" content="Page pour permettre aux gens intererses par mes projects de me contacter a travers  la form de type Library" />
             <meta property="og:image" content="http://localhost:3000/Marouane_logo_MA_awsome_black_background_awsome_gold_color_8k_I_d3d475bb-b9a3-49c3-a222-230ce453def0.png"/>
        </Head>
<main>
        <section>
            <FormLibrary />
        </section>
</main>
         
    </>
}