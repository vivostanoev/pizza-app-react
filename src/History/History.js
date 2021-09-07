import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import styled from "styled-components"
import {Dialog, DialogShadow, DialogContent, ConfirmButton}  from "../FoodDialog/FoodDialog.js";
import {Title} from "../Styles/title.js"



const columns = [{
    Header: 'ID',
    accessor: 'id',
     width: 400,},
    {
    Header: 'Pizza Name',
    accessor: 'name',
    width: 400},
    {
       Header: 'Toppings',
       accessor: 'toppings',
       width: 400},
     {
        Header: 'Price',
        accessor: 'price',
        width: 400},
        {
                Header: 'Status',
                accessor: 'status',
                width: 400}
    ];

const TableGrid = styled(ReactTable)`
    margin-top: 50px;
    margin-right: 400px;
    margin-left: 50px;
`;


function HistoryContainer({username,isHistory,history,setHistory, setDataOrder}){
    return (
                     <div>
                     <h1> History </h1>
                         <TableGrid
                             data={history}
                             columns={columns}
                             defaultPageSize = {10}
                             pageSizeOptions = {[10, 20, 30]}
                             getTrGroupProps={(state, rowInfo, column, instance) => {
                                                 if (rowInfo !== undefined) {
                                                     return {
                                                         onClick: (e, handleOriginal) => {
                                                           console.log('It was in this row:', rowInfo)
                                                           setDataOrder([rowInfo]);
                                                         }
                                                     }
                                                 }}
                                             }
                         />
                     </div>
               );
}



export function History(props) {
  if (!props.isHistory) return null;
  return <HistoryContainer {...props} />;
}


