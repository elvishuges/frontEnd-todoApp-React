import React from "react";
import IconButton from '../template/iconButton'
import Grid from '../template/grid'

export default props => (
    <div role="form" className="todoForm">
       <Grid cols='12 9 10'>
            <input
                type="text"
                id="description"
                className="form-control"
                placeholder="Adicione uma tarefa"
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
        </Grid>
    </div>
)
