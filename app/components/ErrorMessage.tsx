import { PropsWithChildren } from "react"

const ErrorMessage = ( { children }: PropsWithChildren ) => {
    if ( !children ) return null
    return (
        <p className="text-red-500 w-full">{ children }</p>
    )
}

export default ErrorMessage