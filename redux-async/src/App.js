import { Provider } from 'react-redux'

import Post from './components/Post'
import { store } from './redux/Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Post/>
      </div>
    </Provider>
  );
}

export default App;
