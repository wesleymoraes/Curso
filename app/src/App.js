import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div>
      <h2 className='form-title'>Formulário</h2>
      <MyForm user={{ name: "Josias", email: "Josias@email.com" }} />
    </div>
  );
}
export default App;