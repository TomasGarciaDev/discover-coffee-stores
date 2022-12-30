import Link from "next/link";
import { useRouter } from "next/router";

import coffeeStoreData from "../../data/coffee-stores.json"

export function getStaticProps({params}) {
  console.log(params)
  return {
    props: {
      coffeeStore: coffeeStoreData.find(coffeeStore => {
        return coffeeStore.id === params.id
      })
    }
  }
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0"}}, { params: { id: "1"}}
    ]
  }
}

const CoffeeStore = () => {
  const router = useRouter()
  console.log("router", router)
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      {/* <Link href='/coffee-store/dynamic'>
        <a>Go to page dynamic</a>
      </Link> */}
    </div>
  )
}

export default CoffeeStore;
