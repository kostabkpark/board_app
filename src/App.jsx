import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/header"
import Home from "./routes/home"
import Save from "./routes/save"
import List from "./routes/list"
import Detail from "./routes/detail"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/list" element={<List />} />
          <Route path="/api/boards/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
