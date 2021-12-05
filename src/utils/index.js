import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import LanguageWrapper from '../components/LenguageWrapper';
import { store } from "../store";

const DEBOUNCE_DELAY_TIME = 200;
export const debounce = (func, timeout = DEBOUNCE_DELAY_TIME) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export const getFullWrappedComponent = (
  Component,
  props = {},
  reduxStore = store,
) => (
  <BrowserRouter>
    <MemoryRouter>
      <LanguageWrapper>
        <Provider store={reduxStore}>
          <Component {...props} />
        </Provider>
      </LanguageWrapper>
    </MemoryRouter>
  </BrowserRouter>
);


export const handleSizeChange = () => {
  global.innerWidth = 400;
  global.dispatchEvent(new Event('resize'));
};
