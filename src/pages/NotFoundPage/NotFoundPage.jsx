import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1>404 - Page not found</h1>
            <Link to="/" className={styles.link}>Go back to Home</Link>
        </div>
    );
};

export default NotFoundPage;