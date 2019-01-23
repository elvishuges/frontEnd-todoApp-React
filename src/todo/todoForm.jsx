import React from "react";
import IconButton from '../template/iconButton'
import Grid from '../template/grid'

export default props => {
     
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    
    
    return (
    <div role="form" className="todoForm">
    <Grid cols='12 9 10'>
         <input
             type="text"
             id="description"
             className="form-control"
             placeholder="Adicione uma tarefa"
             onKeyUp = {keyHandler}
             value = {props.description}
             onChange = {props.handleChange}
         />
         
     </Grid>
     <Grid cols='12 3 2'>        
        <IconButton onClick={props.handleAdd} 
        style="primary" 
        icon="plus" > </IconButton>
        <IconButton 
        onClick={props.handleSearch} 
        style="info" 
        icon="search" > </IconButton>
        <IconButton
         style='default' icon='close'
         onClick = {props.handleClear}
        ></IconButton>
     </Grid>
 </div>
)}
