
import "./App.css";
import React from "react";
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'
import { ConfigureStore } from './redux/configureStore'
import { Provider } from 'react-redux'


function App() {
	const store = ConfigureStore();

	return (
		<Provider store={store}>

		<BrowserRouter>
			<div>
				<Main />
			</div>
		</BrowserRouter>
		</Provider>
	);
}

export default App
