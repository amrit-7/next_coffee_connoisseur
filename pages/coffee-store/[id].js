import { useRouter } from "next/router";
import storeData from "../../coffee-stores.json";
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
  return (
    <div>
      <h1>Hello {router.query.id}</h1>
      <h2>{props.coffeeStore.name}</h2>
    </div>
  );
};

export default Store;
