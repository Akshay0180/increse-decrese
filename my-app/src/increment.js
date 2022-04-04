import react, { componant } from 'react'
import value from './value';
export default class increment extends componant{
    constructor(){
        super();
        this.this.state={
            value: 0
        }
    }
    btnclickHandler=(type) =>{
        console.log(type);
    }
    render(){
        return(
         <>
        <value/>
        <incrbutton onClick={this.btnclickHandler}/>
        </>
        )
    }
}