import React from 'react';
import Textfield from '../../components/Textfield/index';
import Button from '../../components/Button/index';
import './style.css'
const update = require('immutability-helper'); //A useful library to Mutate a copy of data without changing the original source

const StandardList =(props) => {

    const [state, setStates] = React.useState({
        data:props.data,
        text:{currency1:'',currency2:''},
    });

    const handleAdd = () => {
        const result = update(state, {data: {$push:[state.text]}});
        setStates(result);
        props.getData(result.data);
    };
    const handleRemove = (index) => {
        const removed =  state.data[index].id;
        const result = update(state, {data: {$splice:[[index, 1]]}})
        setStates( result);
        props.getData(result.data)
        if(removed){props.getRemoved(removed)};
    };
    function handleChange(event, name){

        setStates( update(state, {text: {[name]: {$set: event.target.value}}}));

    };



    return(
        <div className={'configurator-list'}>
            <div className={'configurator-textfield'}>
            <Textfield placeholder={'Currency 1'} onChange={event =>handleChange(event,'currency1')} value={state.text.currency1}/>
            <Textfield placeholder={'Currency 2'} onChange={event =>handleChange(event,'currency2')} value={state.text.currency2}/>
            <Button onClick={handleAdd} backgroundcolor={'#2d49d1'}>Add</Button>
            </div>
            <div className={'item-container'}>
                {state.data.map((n,i)=>{
                    return(<div key={n.currency1+n.currency2+i} className={'configurator-item'}>
                        <p>{`${n.currency1} : ${n.currency2}`}</p>
                        <div style={{flexGrow:1}}/>
                        <Button onClick={()=>{handleRemove(i)}} backgroundcolor={'#d1224b'}>

                            Clear
                        </Button>

                    </div>)
                })}

            </div>
        </div>
)}
;

export default StandardList

