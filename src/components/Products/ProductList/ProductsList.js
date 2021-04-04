import React from 'react'
import ProductCard from '../ProductCard'
import {Container} from './styled'

const ProductsList = ({products}) => {
    return (
        <Container>
          {products.map((product) => 
          <ProductCard key={product._id} data={product} />)}
        </Container>
    )
}

export default ProductsList
