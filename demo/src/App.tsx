import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Divider, Typography, Row, Col } from 'antd'
const { Title } = Typography
import { Example } from './components/Example'

const Wrapper = styled.div`
  padding: 20px;
`

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <Title>{`the-read-time`}</Title>
        <Divider />
        <Row gutter={16}>
          <Col span={24}>
            <Example />
          </Col>
        </Row>
      </header>
    </Wrapper>
  )
}

export default App
