import Link from "next/link";

export default function ProductList(){

    const productId = 100
    return(
        <>
         <h1>Products list</h1>
            <Link href = "products/1"><h2>Product 1</h2></Link>
             <Link href="products/2"> <h2>Product 2</h2></Link>
             <Link href="products/3" replace /* This will replace the path and goes to the page.tsx in products */>  <h2>Product 3</h2></Link>
            <Link href={`products/${productId}`}><h2>Product 100</h2></Link>
        </>
    )
}