import './index.css';
import reportWebVitals from './reportWebVitals';

// старый варик
// import state, { addMessage, addPost, subscribe, updateCurrentNewMessageText, updateCurrentNewPostText } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import store from './redux/reduxStore';
// import StoreContext from './StoreContext';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
    root.render(
      
      <React.StrictMode> 
        {/* <StoreContext.Provider value={store}> */}
        <Provider store={store}>
        <App
        //  store = {store}
    />
    {/* </StoreContext.Provider> */}
    </Provider>
      </React.StrictMode> 
    );
  }

renderEntireTree(store.getState())


// store.subscribe(renderEntireTree)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

