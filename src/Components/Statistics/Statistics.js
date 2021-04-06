import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    const options = { good, neutral, bad };

    return (
        <ul className={styles.optionList}>
            {
                Object.keys(options).map(option => (
                    <li className={styles.optionItem} key={option} name={option}>
                        {option[0].toUpperCase() + option.slice(1).toLowerCase()}
                        : <span>{options[option]}</span>
                    </li>
                ))
            }
            <li className={styles.optionItem}>Total: {total()}</li>
            <li className={styles.optionItem}>Positive feedback: {positivePercentage()}%</li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;