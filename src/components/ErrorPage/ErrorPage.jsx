import styles from './ErrorPage.module.css';
import { Link } from "react-router";

function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            <h1>This page doesn't exist</h1>
            <Link to="/">Click here to go back</Link>
        </div>
    );
}

export default ErrorPage;
