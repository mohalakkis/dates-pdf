import { useState } from 'react'


function MaskValor() {
 const [contador, setContador] = useState(0)



 return (
  <div>
   <div className="forms">
   <p>Conting: {contador} </p>
   {/* <input type="number" /> */}
   <button onClick={() => setContador(contador + 1)}>
    one more</button>
   </div>
  </div>
 )
}

export default MaskValor
