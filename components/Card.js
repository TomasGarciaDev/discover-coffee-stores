import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a>
       <h2>{props.name}</h2>
       <Image src={props.imgUrl} width={260} height={160} alt=''/>
      </a>
    </Link>
    )
}

export default Card;