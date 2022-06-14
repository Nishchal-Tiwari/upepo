import React ,{useState} from "react";
import '../css/homepage.css';
import labels from "../labels/labels";
import Number from '../configration/store'
function Increment()
{
    const [val,setVal]=useState(Number);
    function increase()
    {
        setVal(val+1);
        localStorage.setItem("task_number",val+1);
    }
    function reset()
    {
        setVal(0);
        localStorage.setItem("task_number",0);
    }
    return (
        <div className="task">
        <h1 id="number">{val}</h1>
        <div class="d-grid gap-2 col-6 mx-auto">
        <input class="btn" type="reset" onClick={reset} value="Reset"></input>
        <button class="btn btn-primary" onClick={increase} type="button">{labels.button_inc.btn2}</button>
        
        
        </div>
        </div>
        );

}
export default Increment;