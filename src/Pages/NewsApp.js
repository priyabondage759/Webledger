import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import '../../src/App.css';


export function NewsApp() {

    const [newsData, setNewsData] = useState([])
    const [show, setshow] = useState(false)

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=37ca90ed5b26436ca763264c7a63811f')
            .then((val) => {
                setNewsData(val.data.articles)
                console.log(val.data.articles)
            })
    })
    return (
        <div>
            <h3>Top Headlines</h3>
            <div>
                <button onClick={() => setshow(!show)} className='btn btn-primary'>{show ? "Grid View" : "List View"}</button>
                {show ? <>
                    <div className='container my-5'>
                        <div className='row center'>

                            {newsData.map((data) => (
                                <div className='col my-3'>

                                    <div className="card" style={{ width: "20rem" }}>
                                        <img src={data.urlToImage} className="card-img-top" style={{ width: "100%", height: "100%" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.description
                                            }.</p>
                                            {/* <button className='btn btn-primary'>{data.url}</button> */}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </> : <>
                    <div className='container my-5 justify-content-center'>
                        <div className='row center d-flex flex-column mb-2 justify-content-center align-items-center'>

                            {newsData.map((data) => (
                                <div className='col my-3 mx-2'>
                                    <div class="card mb-3" style={{ width: "50rem" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={data.urlToImage} style={{ width: "100%", height: "100%" }} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{data.title}</h5>
                                                    <p className="card-text">{data.description}</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </>}
            </div>



        </div>
    )
}

