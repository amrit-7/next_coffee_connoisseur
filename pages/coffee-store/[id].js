import { useRouter } from "next/router";
import storeData from "../../coffee-stores.json";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/coffee-store.module.css";
import Image from "next/image";
export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: storeData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}
export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: true,
  };
}
const Store = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  const { address, name, imgUrl, neighbourhood } = props.coffeeStore;
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <Link href={"/"}>Home</Link>
          <p>{name}</p>
          <Image
            src={imgUrl}
            alt={name}
            width={600}
            height={360}
            className={styles.storeImg}
          />
        </div>
        <div className="styles.col2">
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
