import { Provider } from 'react-redux';
import store from './store';

import CreateShipment from "./pages/create-shipment/CreateShipment";

function App() {
  return (
    <Provider store={store}>
      <CreateShipment />
    </Provider>
  );
}

export default App;