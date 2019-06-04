import react,{Component} from 'react'

class Toggle extends Component{

    state ={
        on:false
    }
    toggle = () =>{
        this.setState({
            on:!this.state.on
        })
    }
    render(){
        return (
            <>
            {this.state.on &&(
                <h1>Toggle</h1>
            )}
            <button onClick ={this.toggle}>
                ok
            </button>
            </>
        )
    }
}