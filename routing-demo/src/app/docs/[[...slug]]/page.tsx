export default function Docs({params}:
    {
        params: {
            slug: string[]
        }
    }
){

    //The nextjs also offers optional catch all routing (meaning localhost/docs wont be an error)
    //In order to achieve this we can add 2 braces to the slug folder and also achieve optional chaining 
    if(params.slug?.length === 2){
        return <h1>
            Viewing docs for feature {params.slug[0]} and concept {[params.slug[1]]}
        </h1>
    }
    else if (params.slug?.length === 1){
        return <h1> Viewing docs for feature {params.slug[0]}</h1>
    }
    return <h1>Docs Home page</h1>
}

