import React from 'react'
 
const FunctionComponent = ({pessoa}) => {
   return (
       <li>{pessoa.nome} trará {pessoa.tarefa}</li>
   )
}
 
export default FunctionComponent
