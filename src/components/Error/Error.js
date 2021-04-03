import './Error.scss';

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
