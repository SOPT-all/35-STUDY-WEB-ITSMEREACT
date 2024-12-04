import {Component} from 'react';

export default class ClassComponent extends Component{
    //Lifecycle Methods
    
    //컴포넌트 안에 변화가 있을 때, 로딩될때를 리액트에서는 mount 라고 하죠. 
    //"장착했다"
    //update 됐을때, 장착한게 해체될 때 
    //function 이나 코드를 실행할 수 있는 기능

    componentDidMount(){
        //컴포넌트가 처음으로 장착 됐을 때 실행해라
    }
    componentDidUpdate(){
        //컴포넌트 안에 데이터가 업데이트 됐으면 실행해라
    }
    componentWillUnmount(){
        //컴포넌트가 해체될 때, 바로 전에 실행되는 코드
    }
    render(){
        return{
        }
    }
}