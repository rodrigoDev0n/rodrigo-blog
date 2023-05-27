import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Post } from "../components/Post"

export const ApprRouter = () => {
  return (
    <Routes>
        <Route path='/' element={
            <Home />
        } />
        <Route path='/post' element={
            <Post />
        } />
    </Routes>
  )
}
