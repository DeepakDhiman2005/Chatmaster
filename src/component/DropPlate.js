import React from 'react'
import { useState } from 'react'
import '../App.css';

function DropPlate(props) {
    const [Dropplateheight, setDropplateheight] = useState("0px");
    const [PlusHeight, setPlusHeight] = useState("30px");
    const [PaddingSel, setPaddingSel] = useState("0px");

    function ShowContent(){
        if(props.Fees !== null){
            return <>
                <li>{props.Fees[0]}</li>
                <li>{props.Fees[1]}</li>
                <li>{props.Fees[2]}</li>
            </>;
        }else{
            return props.content;
        }
    }

  return <>
    <div className='Drop-plate'>
        <div className="drop-plate-top" onClick={()=>{
                if (Dropplateheight !== "auto") {
                    setPaddingSel("10px 0px 10px 0px");
                    setDropplateheight("auto");
                    setPlusHeight("0px");
                }else{
                    setPaddingSel("0px");
                    setDropplateheight("0px");
                    setPlusHeight("30px");
                }
            }}>
            <h2>{props.title}</h2>
            <div className="plus-sine">
                <div className="plus-under-line" style={{height: PlusHeight}}></div>
            </div>
        </div>
        <div className="drop-plate-bottom" style={{
            padding: PaddingSel, height: Dropplateheight
        }}>
            <p>{ShowContent()}</p>
        </div>
    </div>
  </>
}

export default DropPlate