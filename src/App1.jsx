import React from "react";
import './App.css';
``
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list : []
        }
    }
    
    componentDidMount = () => {
        console.log("backend db에서 게시판 글 목록을 가져왔습니다.");
    }

    componentDidUpdate= () => {
        console.log("게시판 글이 변경되었습니다.");
    }

    componentWillUnmount = () => {
        console.log("컴포넌트가 사라질 예정입니다.");
    }
    onClick = () => {
        // this.state.counter++;
        // console.log(this.state.counter);
        this.setState({counter : this.state.counter + 1})
    }
    render() {
        return (
            <>
                <h1>Class Component</h1>
                <p>{this.state.counter} clicked</p>
                <button onClick={this.onClick}>Click</button>
            </>
        )
    }
}
export default App