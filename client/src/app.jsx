class App extends React.Component{ 
    constructor(props){
        super(props);
    }
    render (){ 
        return(
            <div> 
            React is working
            </div>)
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));