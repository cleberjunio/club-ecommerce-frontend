import React from "react"
import "./App.css"
import { FunctionComponent } from "react"

            interface AppInterface  {
  message?: string
}

          const App: FunctionComponent<AppInterface>= ({message}) =>{
  return message
}

export default  App