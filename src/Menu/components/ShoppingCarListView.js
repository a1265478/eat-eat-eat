import React from 'react'
import ShoppingCarItem from './ShoppingCarItem'
function ShoppingCarListView() {
    const food = [{
        foodName: 'B',
        price: '150',
        description:
            'This is a wider card.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    }]

    return (
        <div>
            {food.map((post, index) => (
                <ShoppingCarItem key={index} post={post} />
            ))}
        </div>
    )
}

export default ShoppingCarListView
