import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this)
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=b1460e287d696041ccb1`     

        fetch(url)
        .then(res=>{

            return res.json()
        
        })
        .then(json=>{
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({moedaB_valor})
        })
    }

    render(){
        return(
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" id="entrada" className ="entrada" onChange={(e) => {this.setState({moedaA_valor: e.target.value }); }}/>
                <input type="button" className="button" value="Converter" onClick={this.converter}/>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}