
import './Input.css'
import PropTypes from 'prop-types';

const Input = ({ labell, placeholder, id }) => {
    console.log(labell, placeholder, id);
    return (
        <div className='input-wrapper'>
            {labell &&
                <label htmlFor={id} className='input-label'>{labell}</label>
            }
            <input type="text" id={id} className='input-field' placeholder={placeholder} />

        </div>
    )
}
// PropTypes validation
Input.propTypes = {
    id: PropTypes.string.isRequired,         // id is required and must be a string
    placeholder: PropTypes.string,           // placeholder is optional, must be string
    labell: PropTypes.string                  // label is optional, must be string
};

export default Input