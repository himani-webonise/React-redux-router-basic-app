class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <label>Name</label>
                    <input type="text"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Login;