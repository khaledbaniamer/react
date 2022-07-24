import Posts from "./components/posts";
import {Provider} from 'react-redux';
import { store } from "./store/stroe";


function App() {
  
  return (
    <Provider store={store}>
      <Posts />
    </Provider>

  );
}

export default App;
