import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import Detail from '../Detail'

export default () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Detail' element={<Detail />} />
    </Routes>
  )
}