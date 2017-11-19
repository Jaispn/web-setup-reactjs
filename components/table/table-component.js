/**
 * Created by jai on 14/05/17.
 */
import React from 'react';
import _ from "lodash";

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.populateSortBy = this.populateSortBy.bind(this);
        this.populateCols = this.populateCols.bind(this);
        this.populateRows = this.populateRows.bind(this);
    }

    populateSortBy() {
        let html = "<form>";
        html += '<div class ="form-group btn btn-secondary dropdown-toggle">';
        html += '<select class="form-control">';
        html += '<option>SortBy</option>';
        _.each(this.props.sortByConfig, (field) => {
            html += '<option>'+field.value+'</option>';
        });
        html += '</select>';
        html += '</div>';
        html += '</form>';
        return <div class="row" dangerouslySetInnerHTML={{__html: html}}></div>
    }

    populateCols() {
        let colSize = 3;
        let html = '<div class="row">';
        _.each(this.props.colsConfig, (col) => {
            html += '<div class="col-md-'+colSize+'">'+col.value+'</div>';
        });
        html +='</div>';
        return <div dangerouslySetInnerHTML={{__html: html}}></div>
    }

    populateRows() {
        let html = "";
        let colSize = 3;
        _.each(this.props.rows, (row) => {
            html += '<div class="row">';
            _.each(this.props.colsConfig, (col) => {
                let val = _.get(row, col.key);
                html += '<div class="col-md-'+colSize+'">'+val+'</div>'
            });
            html += '</div>'
        });
        return <div dangerouslySetInnerHTML={{__html: html}}></div>

    }

    render() {
        return (
            <div>
                {this.props.sortBy ? this.populateSortBy() : <div></div>}
                {this.populateCols()}
                {this.populateRows()}
            </div>
        );
    }
}

export default TableComponent;