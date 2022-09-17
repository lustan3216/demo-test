import 'antd/dist/antd.css'
import './App.scss'
import axios from 'axios'
import { Col, Divider, Row } from 'antd';
import { Button, DatePicker, Input, Card } from 'antd'
import { useEffect, useState } from "react"

function App() {
  const [input, setInput] = useState(1)
  const [offset, setOffset] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    const key = 'c7dd608cba56cddab6e2e6c3fb8fea32'
    const url = `http://api.mediastack.com/v1/news?access_key=${key}&offset=${offset}&limit=${offset}`

    axios.get(url)
      .then(({ data: hahah }) => {
        console.log(hahah.data)
        setData([...hahah.data, ...data])
      })
  }, [offset])

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
          data.map((asd) => <CardItem title={asd.title} >
            hahahhaa
          </CardItem>)
        }
      </header>
    </div>
  )
}

function CardItem(props) {
  return (
    <Card style={{ background: 'black', color: 'white' }} key={props.title} >
      {props.title} {props.children}
    </Card>
  )
}

export default App
