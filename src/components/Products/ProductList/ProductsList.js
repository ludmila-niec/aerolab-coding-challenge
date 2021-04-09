import React from 'react'
import ProductCard from '../ProductCard'
import {Container} from './styled'

const ProductsList = ({products}) => {
    return (
        <Container>
          {products.map((product, index) => 
          <ProductCard key={product._id} data={product} index={index} />)}
        </Container>
    )
}

export default ProductsList
