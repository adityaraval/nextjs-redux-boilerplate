import { wrapper } from '../redux/store';
import PropTypes from 'prop-types';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

export default wrapper.withRedux(MyApp);
