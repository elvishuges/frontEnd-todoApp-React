import React from "react";
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoFor,">
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input
                id="description"
                className="form-control"
                placeholder="Adicione uma tarefa"
            />
        </div>

        <div className="col-xs-12 col-sm-3 col-md-2">
           <IconButton style="primary" icon="plus" > </IconButton>
        </div>
    </div>
)
