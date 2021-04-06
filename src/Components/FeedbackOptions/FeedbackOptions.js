import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <>
            {
                Object.keys(options).map(option => (
                    <button className={styles.feedback_btn} onClick={onLeaveFeedback} type="button" key={option} name={option}>
                        {option[0].toUpperCase() + option.slice(1).toLowerCase()}
                    </button>
                ))
            }
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;