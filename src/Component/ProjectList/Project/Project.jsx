import React from 'react'

export default function Project(props) {
    const {img, title, target} = props;
    return (
        <>
                <div className="col m-2">
                    <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src={img} className="card-img-top" alt="..." style={{height: 215}}/>
                        <div className="card-body">
                            <p className="card-text text-center text-white">{title}</p>
                        </div>
                        {/* Button Modal Project */}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${target}`}>
                            More Detail
                        </button>
                        {/* Modal Detailing Project*/}
                        <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-xl">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center">
                                    <img src={img} alt="" style={{width: 1000}}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
