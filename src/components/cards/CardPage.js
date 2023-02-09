import {useSelector} from "react-redux";
import Card from "./Card";

function CardPage (){
    const cards = useSelector(state=>state.cards.value)
    return(
        <div className="cardPage">
            {cards.map((c, i)=>
                <Card dt={c} key={i}/>
            )}
        </div>
    )
}

export default CardPage;