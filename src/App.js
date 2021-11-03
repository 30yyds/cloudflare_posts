import { Router } from "@reach/router";

import Posts from './components/posts'
import Post from './components/post'
import CreatePost from './components/form'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
      <CreatePost path="/create-post" />
    </Router>
  );
}

export default App;
