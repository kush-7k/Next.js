import { Metadata } from "next"
import Link from "next/link"

export const metadata ={
    title: "blog"
}

export default function Home(){
    <Link href="/blog">Blog</Link>;
    <Link href="/products">Products</Link>;
    return <h1>Welcome Home</h1>
}
//First route
