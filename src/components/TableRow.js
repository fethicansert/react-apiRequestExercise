import React from 'react'
import  uuid  from 'react-uuid'

function TableRow({item}) {
    return (
        <tr key={ uuid() }>
            {Object.values(item).map(value => {
                return <td key={ uuid() }>{ JSON.stringify(value) }</td>
            })}
        </tr>
    );
}

export default TableRow
