import 'antd/dist/antd.css'
import './App.scss'
import axios from 'axios'
import { Col, Divider, Row } from 'antd';
import { Button, DatePicker, Input, Card } from 'antd'
import { useEffect, useState } from "react"

function App() {
  const [input, setInput] = useState(1)
  const [page, setOffset] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    const url = `https://catfact.ninja/facts?page=${page}`

    axios.get(url)
      .then(({ data: hahah }) => {
        console.log(hahah.data)
        setData([...hahah.data, ...data])
      })
  }, [page])

  return (
    <div>
      <header className="App-header">
        <div className="fix">
          <Button type="primary" onClick={() => setOffset(input)}>PRESS ME</Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {
          data.map((asd) => <CardItem fact={asd.fact} >
            hahahhaa
          </CardItem>)
        }
      </header>
    </div>
  )
}

function CardItem(props) {
  return (
    <Card style={{ background: 'black', color: 'white' }} key={props.fact} >
      {props.fact} {props.children}
    </Card>
  )
}

export default App
