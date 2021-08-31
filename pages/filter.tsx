import type { NextPage } from 'next'
import {  useMemo, useState } from "react";
''
const datas = [
  '07.09.2021',
  '28/05/2021',
  '13/05/2021',
  '10/09/2022',
  '22/09/2023',
  '09/02/2000',
  '12/12/2021',
  '22/07/2005',
  "22/04/2021"
]

const DateRangeInput: NextPage = () => {
  const [busca, setBusca] = useState('')
  const FiltroDatas = useMemo(() => {
    const loweBusca = busca.toLowerCase()
    return datas
      .filter((datas) => datas.toLocaleLowerCase().includes(loweBusca))
  }, [busca])

  return (
    <div>
      <p>digite a data:</p>
      <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)} id="" />
      {FiltroDatas.map((datas) => (
        <li key={datas}>{datas}</li>
      ))}
    </div>
  );
}

export default DateRangeInput;