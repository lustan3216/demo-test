import { Button, DatePicker } from "antd"
import { useState } from "react"

function App() {
  const [asd] = useState()

  return (
    <div>
      <header className="App-header">
        <Button type="primary">PRESS ME</Button>

        <DatePicker placeholder="select date" />
      </header>
    </div>
  )
}
