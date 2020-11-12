import '../styles/globals.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ compose(
  	applyMiddleware(reduxThunk)
));

const  MyApp = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
					integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
					crossOrigin="anonymous"
				/>
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Fragment>
	);
}
export default MyApp;