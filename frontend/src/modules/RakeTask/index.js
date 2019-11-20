import React, { Component } from 'react';
import Button from '../../components/Button/index';
import AlertMsg from '../../components/AlertMsg/index';
import List from '../../views/List/index';
import {send_request} from "../../utils/Request";
import axios from 'axios'


export default class RakeTask extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            alertD:false,
            ready:false,

        }
    }

    componentDidMount() {


        send_request('pairs','','','get')
        .then(res=>{

               this.setState({alertD:true,alertStatus:res.data.status,alertMsg:'reload success',data:res.data.data,ready:true})
                console.log(res.data.data)
            }).catch(e=>{

             this.setState({alertD:true,alertStatus:e.response.data.status,alertMsg:e.response.data.message})
        })


    }
    handleSubmit=()=>{
        Promise.all(this.state.data.map(n=>{
            return axios(`http://data.fixer.io/api/latest?access_key=5d5aaf6d58c9a80f17b00ffb60f9bbe8&base=${n.currency1}&symbols=${n.currency2}`, {
            method: 'get',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
          })
        }))
        .then((res) => {
            // console.log(res)
            let result = res.map((n,i)=>{
                if(n.data.success){
                    let currency2=Object.keys(n.data.rates)[0]
                    let result = Object.assign(this.state.data[i],{rate:n.data.rates[currency2]})
                    console.log(result)
                    return result
                }
                else {
                     let result = Object.assign(this.state.data[i],{rate:0})
                    this.setState({alertD:true,alertStatus:400,alertMsg:n.data.error.type})
                    return result
                }
            })

            console.log(result)
            send_request('pairs',{data:result},'','post')
                .then(res=>{
                      this.props.history.push({
                            pathname:'/rate_display',
                            state:res.data.data
                        })
                        this.setState(state=>{
                            return{data:res.data.data};
                        })
                    console.log(res.data.data);


                    }).catch(e=>{

                     this.setState({alertD:true,alertStatus:e.response.data.status,alertMsg:e.response.data.message})
                    })


          }).catch((error) => {
            console.log(error)

          })
    }
    handleDelete=(id)=>{
        send_request('pairs',{data:[id]},'','delete')
        .then(res=>{

               this.setState({alertD:true,alertStatus:res.data.status,alertMsg:res.data.message})
                console.log(res.data.data)
            }).catch(e=>{

             this.setState({alertD:true,alertStatus:e.response.data.status,alertMsg:e.response.data.message})
        })
    }


8
    render() {

          if(this.state.ready) {
         return (<div style={{textAlign:'center'}}>

            <List getRemoved={(removed)=>{this.handleDelete(removed)}} data={this.state.data} getData={(data)=>{console.log(data);this.setState({data:data})}}/>
         <AlertMsg status={this.state.alertStatus} open={this.state.alertD} msg={this.state.alertMsg} handleClose={()=>{this.setState({alertD:false})}}/>
        <br/>
             <Button onClick={this.handleSubmit} backgroundcolor={'#a92722'}>Submit</Button>
         </div>)}
          else {
              return(<div>Loading</div>)
          }
  }


}