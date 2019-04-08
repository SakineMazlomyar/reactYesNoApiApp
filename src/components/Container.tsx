import React, { Component,CSSProperties } from 'react';

interface Props {}

interface State {
    answer:string,
    pictureSrc:string
}
export default class Container extends Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            answer:'',
            pictureSrc:''
        }
        this.handleClick = this.handleClick.bind(this);
       
    }
    componentDidMount(){
     fetch("https://yesno.wtf/api/")
        .then((response)=>{
            return response.json()
        }).then((dataJson) =>{
            this.setState({
                answer:dataJson.answer,
                pictureSrc:dataJson.image
            })
        })

    }

    handleClick(){
        fetch("https://yesno.wtf/api/")
    .then((response)=>{
        return response.json()
    }).then((dataJson) =>{
        this.setState({
            answer:dataJson.answer,
            pictureSrc:dataJson.image
        })
    })
    }
       
    private get DisplayData(){
        return (
            <div>
                <img style={imgSize} src={this.state.pictureSrc}></img>
                <h1>{this.state.answer}</h1>
                <button onClick={this.handleClick}>Change The content</button>
            </div>

        )

    }
    render(){
        return(
            <div style={divStyle}>
                {this.DisplayData}
            </div>
        )
    }
}

const divStyle:CSSProperties = {
    display:"flex",
    flexDirection:"column",
    margin:"auto",
    marginTop:"5em",
    textAlign:"center",
    backgroundColor:"grey"
}

const imgSize: CSSProperties = {
    paddingTop:"1em",
    width:"35%"
}