import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import Historic from '../Historic'

export default () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Historic' element={<Historic />} />
    </Routes>
  )
}