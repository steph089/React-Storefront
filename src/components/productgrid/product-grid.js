import ProductCard from "./product-card";

export default function ProductGrid(props) {

    return  <div class="container">
        {renderGrid(props)}
    </div>
};

function renderGrid(props) {

    let data = priceSort(props.data,props.sort)
    data = priceFilter(data,props.filter)
    if (props.searchFilter !== "") {data = searchFilter(data,props.searchFilter)}

    // row splitter on product list
    let modified_collection=[]
    if (data.length>0) {
            modified_collection = data.reduce( (rows, key, index) =>{ 
                return (index % 4 === 0 ? rows.push([key]) 
                : rows[rows.length-1].push(key)) && rows;
            }, []);
            
        }

    return modified_collection.map((row) => (
        <div class="row">
            {row.map(card => (<div class="col-3">
                 <ProductCard product={card} />
            </div>))}  
        </div>
    ));
  };

  function priceSort(data,direction){
    // i could use a switch-case but, i feel like prioritizing expensive items
    if (direction === "asc"){
        return data.sort((a,b) => a.price-b.price)
    }else if(direction === "desc") {
        return data.sort((a,b) => b.price-a.price)
    }else {
        return data
    }
  }

  function priceFilter(data, filter){
    if (filter === undefined || filter === null || filter.length === 0){return data}
    var temp = data.filter(product => 
        (filter.includes("$0-$50")   && (0   <= product.price && product.price <= 50))  ||
        (filter.includes("$50-$100")  && (50  <= product.price && product.price <= 100)) ||
        (filter.includes("$100-$500") && (100 <= product.price && product.price <= 500)) ||
        (filter.includes("$500+") && (500 <= product.price ))
    ) 
    return temp
  }

  function searchFilter(data, searchFilter){
    var temp = data.filter(product => 
        product.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
        product.description.toLowerCase().includes(searchFilter.toLowerCase())
        );
    return temp
  }