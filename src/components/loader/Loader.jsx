import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.overlay}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#206b7e"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;




