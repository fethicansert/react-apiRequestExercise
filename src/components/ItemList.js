import React from 'react'

function ItemList({items}) {
  return (
    <ul>
      {items.length ? (
        items.map(item => <li key={item.id}>{ JSON.stringify(item) }</li>)
      ):(
        <p>List is Empty</p>
      )}
    </ul>
  )
}

export default ItemList
