import Counter from "./components/Counter";
import { Provider } from 'react-redux'
import { store } from './redux/Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
