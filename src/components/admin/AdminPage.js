import React from "react";
import {useDispatch} from "react-redux";
import {add} from "../../reducers/cardReducer";

function AdminPage() {
    const [form, setForm] = React.useState({
        q: "",
        a: "",
        type: ""
    })

    const [check, setCheck] = React.useState("math")

    const dispatch = useDispatch();

    const changeValue = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })

        if (prop === "type") {
            setCheck(event.target.value)
        }

    }

    return (
        <div className="adminPage">
            <input placeholder={"question..."} type="text" value={form.q} onChange={changeValue("q")}/>
            <input placeholder={"answer..."} type="text" value={form.a} onChange={changeValue("a")}/>
            <div className={"buttons"}>
                <input type="radio" value={"math"} onChange={changeValue("type")} checked={check === "math"}/>
                <label>Math</label>
                <input type="radio" value={"science"} onChange={changeValue("type")} checked={check === "science"}/>
                <label>Science</label>
                <input type="radio" value={"history"} onChange={changeValue("type")} checked={check === "history"}/>
                <label>History</label>

            </div>


            <div className="submit" onClick={() => dispatch(add(form))}>Submit</div>

        </div>
    )
}

export default AdminPage;