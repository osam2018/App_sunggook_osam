import { createStore } from 'redux';
import reducer from './server';

const configure = () => {
  const store = createStore(reducer);
  return store;
};

export default configure;