import React from 'react';
import './App.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/route'
import SearchBar from './components/search-bar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
          <Sidebar />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
