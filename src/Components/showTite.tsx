import { useEffect } from "react"





export default function showTite(title: string) {

    useEffect(() => {

        title + 'something'


        return () => {
            title + ''


        }
    }, [])



    return (
        <>

            {title}


        </>
    )
}