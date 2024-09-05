import { FunctionComponent } from "react"

//Components
import Header from "./components/header/header.component";

interface AppInterface  {
  message?: string
}

  const App: FunctionComponent<AppInterface>= ({message}) =>{
  return <Header/>
}

export default  App;