import React from "react";
import IconButton from '../template/iconButton'
import Grid from '../template/grid'

export default props => (
    <div role="form" className="todoForm">
       <Grid cols='12 9 10'>
            <input
                id="description"
                className="form-control"
                placeholder="Adicione uma tarefa"
            />
        </Grid>
        <Grid cols='12 3 2'>        
           <IconButton style="primary" icon="plus" > </IconButton>
        </Grid>
    </div>
)
