import { FunctionComponent } from "react"

interface AppInterface  {
  message?: string
}

  const App: FunctionComponent<AppInterface>= ({message}) =>{
  return <h1>Hello World</h1>
}

export default  App;