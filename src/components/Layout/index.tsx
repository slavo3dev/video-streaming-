import { FC } from "react"

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen w-full">
      {children}
    </div>
  )
}
