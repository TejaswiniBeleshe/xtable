import React from "react";

const TableData = ({date,view,article})=>{
    return(
        <tr>
            <td>{date}</td>
            <td>{view}</td>
            <td>{article}</td>
          </tr>
    )
}

export default TableData;