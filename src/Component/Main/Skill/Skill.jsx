import React from 'react'
import '../Main.css'

export default function Skill(props) {
    return (
        <>
                <div className="card p-3 m-2" style={{width: "10rem"}}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">
                            {props.title}
                        </p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: `${props.progress}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.progress}</div>
                    </div>
                </div>
        </>
    )
}
