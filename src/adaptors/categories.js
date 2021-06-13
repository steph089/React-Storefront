  export default function getCategories() {
    try {
        const response = fetch('https://fakestoreapi.com/products/categories').then(res=>res.json())
        return response
      } catch (error) {
        return error
      }
  }