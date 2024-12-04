import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/Home.jsx';
import TodoList from '../src/Components/ToDo.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/todo">To-Do List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;



