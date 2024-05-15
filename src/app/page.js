"use client"
import { useState } from "react";
import data from "../data/items.json"
import Item from "../components/Item";
import ShoppingCart from "../components/ShoppingCart";
import SortElements from "../components/SortElements";
import SearchBar from "@/components/SearchBar";
import PriceRangeFilter from "@/components/PriceRangeFilter";

export default function Page() {
  const [price, setPrice] = useState(0)
  const [sold, setSold] = useState([])
  const [ascending, setAscending] = useState(true)
  const [sortByPrice, setSortByPrice] = useState(true)
  const [items, setItems] = useState(data)

  function priceSorting(elements) {
    if(ascending) {
        elements.sort((a, b) => {
            if(a.price < b.price) return 1
            if(a.price > b.price) return -1
            return 0
        })
    } else {
        elements.sort((a, b) => {
            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
            return 0
        })
    }
    setItems(elements)
  }
  function nameSorting(elements) {
    if(ascending) {
        elements.sort((a, b) => {
            if(a.name < b.name) return 1
            if(a.name > b.name) return -1
            return 0
        })
    } else {
        elements.sort((a, b) => {
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1
            return 0
        })
    }
    setItems(elements)
}

function search(str) {
  const elements = []
  for(let i = 0; i < data.length; i++){
    if(data[i].name.includes(str) || data[i].description.includes(str)){
      elements.push(data[i])
    }
    if(!str) {
      setItems(data)
    } else {
      setItems(elements)
    }
  }
}

function priceFilter(min, max){
  const elements = []
  for(let i = 0; i < data.length; i++){
    if(data[i].price >= +min && data[i].price <= +max){
      elements.push(data[i])
    }
  }
  if(!min && !max) {
    setItems(data)
  } else {
    setItems(elements)
  }
}

  const addToCart = (id, name, itemPrice) => {
    setPrice(price => price + itemPrice)
    if(!sold.some(el => el.id==id)){
      setSold(sold => {
        sold = sold.concat({id: id, name: name, price: itemPrice})
        return sold
      })
    }
  }

  return (
    <main className="bg-slate-700 m-0 p-10">
      <section>
        <SortElements ascending={ascending} price={sortByPrice} nameSorting={() => {
          setSortByPrice(false)
          nameSorting(items)
        }} priceSorting={() => {
          setSortByPrice(true)
          priceSorting(items)
        }} setAscending={() => {
          setAscending(true)
          sortByPrice ? priceSorting(items) : nameSorting(items)
          }} setDescending={() => {
            setAscending(false)
            sortByPrice ? priceSorting(items) : nameSorting(items)
            }}/>
      </section>
      <section className="my-2">
        <SearchBar setSearchTerm={(e) => search(e)}/>
      </section>
      <section className="my-2">
        <PriceRangeFilter setPriceFilter={(min, max) => priceFilter(min, max)} />
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        {items.map(({id, name, description, price}) => (
          <Item key={id} name={name} description={description} price={price} addItem={() => addToCart(id, name, price)}/>
        ))}
      </section>
      <section>
         <ShoppingCart cartItems={sold} price={price}/>
      </section>
    </main>
  )
}
