//This is an example for porgrammatic navigation
"use client"
import { useRouter } from "next/router"
export default function OrderProduct(){
    const router = useRouter()
const handleClick = () => {
    console.log("placing your order")
    router.push("/");
    router.replace("/");
    router.back()
}

    return 
    <> 
    <h1>Order Product</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
}