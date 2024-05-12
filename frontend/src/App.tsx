import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./Pages/Signup.tsx";
import {Signin} from "./Pages/Signin.tsx";
import {Blog} from "./Pages/Blog.tsx";
import {BlogId} from "./Pages/BlogId.tsx"
import {PublishBlog} from "./Pages/PublishBlog.tsx";

function App() {
 return(
     <BrowserRouter>
         <Routes>
             <Route path="/signup" element={<Signup/>} />
             <Route path="/signin" element={<Signin/>}/>
             <Route path="/blog" element={<Blog/>}/>
             <Route path='/blog/:id' element={<BlogId/>}/>
             <Route path='/blog/publish' element={<PublishBlog/>}/>
         </Routes>
     </BrowserRouter>
 )
}

export default App
