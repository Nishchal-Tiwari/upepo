import React ,{useState} from "react";
import '../css/homepage.css';
function Increment()
{
    const [val,setVal]=useState(0);
    function increase()
    {
        setVal(val+1);
    }
    return (
        <div className="task">
        <h1 id="number">{val}</h1>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" onClick={increase} type="button">Button</button>
        
        </div>
        </div>
        );

}
export default Increment;