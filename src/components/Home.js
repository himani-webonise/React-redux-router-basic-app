class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Header</h1>
                </header>
                {this.props.children}
                <header className="App-footer">
                    <h1 className="App-title">Welcome to Header</h1>
                </header>
            </div>
        );
    }
}

export default Home;