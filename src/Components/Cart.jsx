import { Link } from "react-router-dom"
export default function Cart() {
    return (
        <div>
            <p>This is the cart</p>
            <p>Click to go back to main page:</p>
            <Link to="/"><button>Main page</button></Link>
        </div>
    )
}