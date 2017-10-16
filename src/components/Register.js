import register from '../actions/RegisterAction';

class Register extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={register('hi')}>
                    <label>Name</label>
                    <input type="text"/>
                    <input type="submit" value="Register"/>
                </form>
                <label className="show-name"></label>
            </div>
        );
    }
}

export default Register;