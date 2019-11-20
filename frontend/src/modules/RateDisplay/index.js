import React, { Component } from 'react';
import Button from '../../components/Button/index';
import AlertMsg from '../../components/AlertMsg/index';
import Table from '../../views/Table/index';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {send_request} from "../../utils/Request";
function createData(id,currency1,currency2,rate, createdAt,updatedAt,remove) {
  return {id,currency1,currency2,rate, createdAt,updatedAt,remove};
}


const headRows = [
  { id: 'id', numeric: true, disablePadding: false, label: 'Pair Id' },
  { id: 'currency1', numeric: true, disablePadding: false, label: 'Currency 1' },
    { id: 'currency2', numeric: true, disablePadding: false, label: 'Currency 2' },
  { id: 'rate', numeric: true, disablePadding: false, label: 'Rate' },
    { id: 'createdAt', numeric: true, disablePadding: false, label: 'Created At' },
    { id: 'updatedAt', numeric: true, disablePadding: false, label: 'Updated At' },
     { id: 'remove', numeric: true, disablePadding: false, label: ' ' },


];

export default class RateDisplay extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            alertD:false,
            alertMsg:'',
            alertStatus:'',
            ready:false,
            selected:[]

        }
    }
    handleRemove=(idList,event)=>{
        event.stopPropagation();
        send_request('pairs',{data:idList},'','delete')
        .then(res=>{

               this.setState(state=>{
                   let result = state.data.filter(n=>idList.indexOf(n.id)==-1)
                   this.props.history.push({
                            pathname:'/rate_display',
                            state:result
                        })
                   return  {alertD:true,alertStatus:res.data.status,alertMsg:res.data.message,data:result}
               }
              )



            }).catch(e=>{

             this.setState({alertD:true,alertStatus:e.response.data.status,alertMsg:e.response.data.message})
        })

    }
    componentDidMount() {
        if(this.props.location.state){
             let  sort_list = [];
             let data = this.props.location.state;
            for(let i in data){
            sort_list.push(createData(data[i].id,data[i].currency1,data[i].currency2,data[i].rate,data[i].createdAt,data[i].updatedAt,<Button backgroundcolor={'#d1224b'} key={data[i].id} onClick={this.handleRemove.bind(this,[data[i].id])}>Remove</Button>))
            }
            this.setState({data:sort_list,ready:true})
        }
        else{
           window.location.pathname = '/'
        }




    }




    render() {

          if(this.state.ready) {
         return (<div>
             <a href={'/'}>Back to RakeTask</a>
             <Table  rows={this.state.data} headRows={headRows} title={'Rate Display'} getSelected={(data)=>{this.setState({selected:data})}} Actions={
            <IconButton onClick={this.handleRemove.bind(this,this.state.selected)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
         }/>
         <AlertMsg status={this.state.alertStatus} open={this.state.alertD} msg={this.state.alertMsg} handleClose={()=>{this.setState({alertD:false})}}/>

         </div>)}
          else {
              return(<div>Loading</div>)
          }
  }


}