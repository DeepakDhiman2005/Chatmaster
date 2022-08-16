import React from 'react'
import { useState } from 'react'

function DropPlate(props) {
    const [Dropplateheight, setDropplateheight] = useState("0px");
    const [ColorChange, setColorChange] = useState("black");
    const [TranparentChange, setTranparentChange] = useState("transparent");
    const [PaddingSel, setPaddingSel] = useState("0px");
  return <>
    <style>
        {`
            .Drop-plate{
                width: 70%;
                overflow: hidden;
                margin-bottom: 10px;
            }
            .drop-plate-top{
                background-color: #fafafa;
                padding: 10px;
                border: 1px solid silver;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .drop-plate-top>h2{
                margin: 0px;
                font-weight: 400;
                font-size: 20px;
                font-family: system-ui;  
            }
            .updown-arrow{
                height: 12px;
                width: 12px;
                border: 2px solid black;
                border-top: 2px solid transparet;
                border-left: 2px solid transparet;
                transform: rotate(45deg);
                cursor: pointer;
            }
            .drop-plate-bottom{
                background-color: white;
                border: 1px solid silver;
                padding: 0px;
                overflow: hidden;
                transition: all 0.2s;
                height: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
        `}
    </style>
    <div className='Drop-plate'>
        <div className="drop-plate-top" onClick={()=>{
                if (Dropplateheight !== "auto") {
                    setPaddingSel("10px 0px 10px 0px");
                    setDropplateheight("auto");
                    setTranparentChange("black");
                    setColorChange("transparent");
                }else{
                    setPaddingSel("0px");
                    setDropplateheight("0px");
                    setTranparentChange("transparent");
                    setColorChange("black");
                }
            }}>
            <h2>{props.title}</h2>
            <div className="updown-arrow" style={{
                border: `2px solid ${ColorChange}`,
                borderTop: `2px solid ${TranparentChange}`,
                borderLeft: `2px solid ${TranparentChange}`
            }}></div>
        </div>
        <div className="drop-plate-bottom" style={{
            padding: PaddingSel, height: Dropplateheight
        }}>{props.content}</div>
    </div>
  </>
}

export default DropPlate