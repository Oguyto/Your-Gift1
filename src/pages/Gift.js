import { Link } from "react-router-dom";

function Gift(){
    const tbChoose = [  "The best drink of my life at Chez Olive home's club.",
                        'A classical drink at my home .',
                        'Nothing, i am tired today.',
                        'An other day for sure !']
    return (
        <div className="App">
            <headers><h1>You WON (pick one) </h1></headers>
            <article>
                <Link to="/meet"><button>{tbChoose[0]} Recommended option</button></Link>
                <Link to="/meet"><button>{tbChoose[1]}</button></Link>
                <Link to="/sure"><button>{tbChoose[2]}</button></Link>
                <Link to="/meet"><button>{tbChoose[3]}</button></Link>
            </article>
        </div>
    )
}
export default Gift;