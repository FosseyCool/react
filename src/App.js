import './App.css';
import Message from './Message';

function App(props) {
  let name = 'FirstTest';
  return (
    <div style={{backgroundColor:'#61dafb'}}>
      <Message name={name}/>
    </div>
  );
}
export default App;
