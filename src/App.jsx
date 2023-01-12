import './styles/App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets'
function App() {
  return (
    <div className="App">
    {/* Sidebar */}
      <Sidebar/>
    {/* Feed */}
    <Feed/>
    {/* Widgets */}
    <Widgets/>
    </div>
  );
}

export default App;
