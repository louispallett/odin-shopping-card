import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <p>This is the main page</p>
            <p>Click button to go to /cart</p>
            <Link to="cart"><button>Cart</button></Link>
        </div>
    )
}