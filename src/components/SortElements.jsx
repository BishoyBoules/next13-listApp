import React, {useState} from 'react'

const SortElements = ({nameSorting, priceSorting, ascendingSorting, descendingSorting, sortOrder, sortType}) => {
        
  return (
    <div className='md:w-96 mb-6'>
        <section>
            <h1 className='mb-2 block text-slate-300 rounded-lg text-center bg-cyan-800 w-20 font-bold'>Sort By</h1>
        </section>
        <section className='grid grid-flow-row lg:grid-cols-4  sm:grid-cols-2 content-center'>
                <button className={'p-2 rounded-xl duration-300 transition font-bold mt-2 w-40 lg:w-auto lg:mr-5 ' + (sortType == "name" ? "text-slate-300 bg-cyan-800" : "bg-slate-300 text-cyan-800")} onClick={nameSorting}>Name</button>
                <button className={'p-2 rounded-xl duration-300 transition font-bold mt-2 w-40 lg:w-auto lg:mr-5 ' + (sortType == "price" ? "text-slate-300 bg-cyan-800" : "bg-slate-300 text-cyan-800")} onClick={priceSorting}>Price</button>
                <button className={'p-2 rounded-xl duration-300 transition font-bold mt-2 w-40 lg:mr-5 ' + (sortOrder !== "ascending" ? 'bg-slate-300 text-cyan-800' : 'text-slate-300 bg-cyan-800')} onClick={ascendingSorting}>Ascending</button>
                <button className={'p-2 rounded-xl duration-300 transition w-40 font-bold mt-2 lg:ml-20 ' + (sortOrder == "descending" ? 'text-slate-300 bg-cyan-800' : 'bg-slate-300 text-cyan-800')} onClick={descendingSorting}>Descending</button>
        </section>
       
    </div>
  )
}

export default SortElements