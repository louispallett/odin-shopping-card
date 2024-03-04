import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <p>This is the main page</p>
            <p>Click button to go to /shop</p>
            <Link to="shop"><button>Shop</button></Link>
        </div>
    )
}