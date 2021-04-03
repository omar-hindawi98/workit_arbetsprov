import './Error.scss';

/**
 * Returns a Component for Error displaying
 * @param props, takes in prop: message
 */
function Error(props){
    return (
        <div>
            <h2>Error</h2>
            <div className="error_message">
                <p>
                    {props.message}
                </p>
            </div>
        </div>
    );
}

export default Error;
