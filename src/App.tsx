//import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"; // 追加
import Top from './components/Top.tsx'
import Ca from './components/CaTech.tsx'
import Create from './components/Create.tsx'



function App() {

  return (
      <BrowserRouter>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={ <Top /> } /> {/*RouteにHomeを設定する*/}
        <Route path="/*" element={ <Top /> } /> {/*RouteにHomeを設定する*/}
        <Route path="/create" element={ <Create /> } /> {/*RouteにCreateを設定する*/}
        <Route path="/catech" element={ <Ca /> } /> {/*RouteにCaTechを設定する*/}
      </Routes>
      </BrowserRouter>
  )
}

export default App
