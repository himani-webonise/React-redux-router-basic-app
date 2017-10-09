class Home extends React.Component {
    render() {
        return (

        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to Header</h1>
            </header>
            <p className="App-intro">
              To get started, edit Test and save to reload.
            </p>
            {this.props.children}
            {this.props.children}
            <h1>Footer</h1>
        </div>
        );
    }
}

export default Home;