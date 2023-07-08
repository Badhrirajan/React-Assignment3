import React from 'react';

export default function Card({data = []}) {
  return (
        <div className="col-4">
                    <div className="card box mt-4" style={{width: "18rem"}}>
                          <img src={data.image} class="card-img-top" alt="..." style={{height: "150px"}}/>
                        <div className="card-body">
                            <h6 className="card-text"><b>{data.title}</b></h6>
                            <p className="card-text" style={{color: "grey", opacity: "1px"}}>{data.description}</p>
                        </div>
                </div>
        </div>
       

  )
}
