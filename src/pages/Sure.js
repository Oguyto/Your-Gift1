import { Link } from "react-router-dom";

function Sure () {
    const myText = "Are you sure? Don't you want to relax, and have a discret, fun party, remember what happened at olive's Home, stay at olive's Home"
    return (
    <>
        <h3>{myText}</h3>
        <Link to="/gift"><button>No, i want to relax and i want my drink</button></Link>
        <button>Yes, i am not interested</button>
    </>
    )
}
export default Sure;