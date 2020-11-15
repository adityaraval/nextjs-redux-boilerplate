import { wrapper } from '../redux/store';
import { useSelector } from 'react-redux';
import { setTick } from '../redux/actions/mainActions';

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
    store.dispatch(setTick('Updated...'));
});

// you can also use `connect()` instead of hooks
const Home = () => {
    const { tick } = useSelector((state) => state.main);
    return <div>{tick}</div>;
};

export default Home;
