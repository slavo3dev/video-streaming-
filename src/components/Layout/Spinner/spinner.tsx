import { FC } from "react"

export const Spinner: FC = () => {

    return <div className="grid h-screen place-items-center">

        <div className="flex justify-center items-center">
            <div className=" animate-bounce inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
}