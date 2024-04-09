import { Metadata } from "next";
import Link from "next/link";
type Props = {
    params: {
        productId: string
    }
}

//This is the dynamic routing of the generate metadata and also it can be an async funtion too.
export const generateMetadata = async ({ params }: Props): Promise<Metadata> =>{
    const title = await new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${params.productId}`
    }
}
export default function ProductDetails({ params }: {
    params: {productId: string}
}){
    <Link href="/">Home</Link>
    return <h1>Details about Product {params.productId}</h1>;
}