import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Post } from "../components/Post"
import { articles } from "../helpers/post-data"

export const ApprRouter = () => {

  return (
    <Routes>
        <Route path='/' element={
            <Home />
        } />
        <Route path='/post' element={
            <Post />
        } />
        {
          articles.map(({route, file}) => (
            <Route key={route} path={route} element={
              <Post article={file} />
            } />
          ))
        }
    </Routes>
  )
}
