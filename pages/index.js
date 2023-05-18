import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Banner from "@/components/banner";
import Card from "@/components/card";

import coffeeStores from "../coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
  const handleButttonClick = () => {
    console.log("Hello Button");
  };
  return (
    <Fragment>
      <Head>
        <title>Coffee Connoiesseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Banner
          buttonText={"View stores nearby"}
          clickHandler={handleButttonClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero.png"
            width={600}
            height={400}
            alt="hero"
            priority
          />
        </div>
        {coffeeStores.length > 0 ? (
          <Fragment>
            <h2 className={styles.heading2}>Toronto Stores </h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((store) => {
                const { id, name, imgUrl } = store;
                return (
                  <Card
                    key={id}
                    name={name}
                    imgUrl={imgUrl}
                    link={`/coffee-store/${id}`}
                    classNam={styles.card}
                  />
                );
              })}
            </div>
          </Fragment>
        ) : null}
      </main>
    </Fragment>
  );
}
