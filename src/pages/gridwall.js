import { React, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getProducts, getAllProducts } from '../adaptors/products';
import ProductGrid from '../components/productgrid/product-grid';



export default function Gridwall() {
    const[isLoading, setIsLoading ] = useState(true)
    var [data, setData] = useState([])

    var [sort, setSort] = useState("")
    var [filters, setFilter] = useState([])
    var [searchFilter, setSearchFilter] = useState("")


    let { categoryId } = useParams();

    const handleRemoveItem = (e) => {
        const filter = e.target.getAttribute("filter")
        setFilter(filters.filter((item) => item !== filter));
    };

    const handleChange = (e) => {
        setSearchFilter(e.target.value);
      }


    useEffect(() => {
            setIsLoading(true)
            try {
                if (categoryId === "all"){
                    getAllProducts("").then((productsSet) => { setData(productsSet) })
                } else {
                    getProducts(categoryId,"").then((productsSet) => { setData(productsSet) })
                }
                setSort("")
                setIsLoading(false)
                getProducts(categoryId,"").then((productsSet) => {
                    setData(productsSet)
                    setSort("")
                    setFilter([])
                    setIsLoading(false)   
                })
            } catch (error) {
               // Do something with error
            }
            return () => {}
     }, [categoryId]);

     //split banner into component later
     //filters is kinda weak ngl, like the values should be in an object and iterated over
     return isLoading ? <div>Loading</div> : 
        <div>            
            <div class="banner-container">
                <img alt="" src={"https://loremflickr.com/1280/250/" + categoryId} />
                <div class="centered">
                    {categoryId} 
                </div>
            </div>
             <div class="filter">
                <div class="dropdown left">
                    <button class="dropbtn">Filter Price
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a onClick={(e) => setFilter(filters.concat("$0-$50"))}>$0-$50</a>
                        <a onClick={(e) => setFilter(filters.concat("$50-$100"))}>$50-$100</a>
                        <a onClick={(e) => setFilter(filters.concat("$100-$500"))}>$100-$500</a>
                        <a onClick={(e) => setFilter(filters.concat("$500+"))}>$500+</a>
                    </div>
                </div>
                <div >
                    {filters.map((filter) => (<div class="dropdown filter-button left">
                    <button class="dropbtn" filter={filter} onClick={handleRemoveItem}>{filter}<i class="fa fa-times-circle"></i></button>
                 </div>))}  
                 </div>
                <div class="dropdown left">
                    <button class="dropbtn">Price Sort
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a onClick={(e) => setSort("desc")}>Price: High -&gt; Low</a>
                        <a onClick={(e) => setSort("asc")} >Price: Low -&gt; High</a>
                    </div>
                </div>
                <div class="dropdown right"> <input type="text" placeholder="Search.." value={searchFilter} onChange={handleChange}/></div>
            </div>
            <ProductGrid data={data} sort={sort} filter={filters} searchFilter={searchFilter}/>
        </div>
}