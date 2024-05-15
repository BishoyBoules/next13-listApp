import React, {useState} from 'react'

const SortElements = ({nameSorting, priceSorting, setAscending, setDescending, price, ascending}) => {
        
  return (
    <div className='w-96 mb-6'>
        <section>
            <h1 className='mb-2 block text-slate-300 rounded-lg text-center bg-cyan-800 w-20 font-bold'>Sort By</h1>
        </section>
        <section className='grid grid-flow-row lg:grid-cols-4 sm:grid-cols-2 content-center'>
                <button className={'p-2 rounded-xl duration-300 transition font-bold mt-2 w-40 lg:w-auto lg:mr-5 ' + (price ? "bg-slate-300 text-cyan-800" : "text-slate-300 bg-cyan-800")} onClick={nameSorting}>Name</button>
                <button className={'p-2 rounded-xl duration-300 transition font-bold mt-2 w-40 lg:w-auto lg:mr-5 ' + (!price ? "bg-slate-300 text-cyan-800" : "text-slate-300 bg-cyan-800")} onClick={priceSorting}>Price</button>
                <button className={'p-2 rounded-xl duration-300 transition font-bold mt-2 w-40 lg:mr-5 ' + (ascending ? 'text-slate-300 bg-cyan-800' : 'bg-slate-300 text-cyan-800')} onClick={setAscending}>Ascending</button>
                <button className={'p-2 rounded-xl duration-300 transition w-40 font-bold mt-2 lg:ml-20 ' + (!ascending ? 'text-slate-300 bg-cyan-800' : 'bg-slate-300 text-cyan-800')} onClick={setDescending}>Descending</button>
        </section>
       
    </div>
  )
}

export default SortElements