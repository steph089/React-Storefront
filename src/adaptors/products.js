export default function getAllProducts(params) {
  if (params === null){params = ""}
  try {
      return fetch('https://fakestoreapi.com/products' + params).then(res=>res.json())
    } catch (error) {
      return error
    }
}

function getProducts(category,params) {
  if (params === null){params = ""}
  try {
      return fetch('https://fakestoreapi.com/products/category/'+ category + params).then(res=>res.json())
    } catch (error) {
      return error
    }
}

function getProductInfo(productId) {
  try {
      return fetch('https://fakestoreapi.com/products/' + productId).then(res=>res.json())
    } catch (error) {
      return error
    }
} 

export {getProducts, getAllProducts, getProductInfo}