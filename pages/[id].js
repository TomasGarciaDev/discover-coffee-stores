import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
  const router = useRouter()
  return(
    <div>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      Page {router.query.id}
    </div>
    )
}

export default DynamicRoute