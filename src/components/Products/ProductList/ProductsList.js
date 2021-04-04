import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {Container} from './styled'

const ProductsList = () => {
    return (
        <Container>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Container>
    )
}

export default ProductsList
