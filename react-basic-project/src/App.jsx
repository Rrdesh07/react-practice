import { useState } from 'react'
import Login from './components/form-practice/login/login'
import { Route, Routes, useNavigate,Link} from "react-router-dom";
import RecipeList from './components/RecipeList/RecipeList'
import CommnentList from './components/CommentList/CommentList';
import RecipeDetails from './components/RecipeList/RecipeDetails'
import Layout from './components/Layout/Layout';


function App() {
  const navigate = useNavigate()

  return (
    <>
    {/* just two ways of doing routing using link tag or else you can do it using useNavigate hook */}
    <Link to={'/recipe-list'}>Navigate to recipe list</Link>
    <br />
    <Link to={'/comment-list'}>Navigate to comment list</Link>
    <button onClick={()=>navigate('/recipe-list')}>Recipe Page</button>
    <button onClick={()=>navigate('/comment-list')}>Comment Page</button>
    <Routes>
      <Route path='/home' element={<Layout/>}>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="recipe-list" element={<RecipeList />} />
        <Route path="comment-list" element={<CommnentList />} />
        <Route path='recipe-list/:id' element={<RecipeDetails/>}/>
      </Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
    </>
  )
}

export default App
