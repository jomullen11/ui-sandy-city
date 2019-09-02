import React from 'react'

const RelatedArticles = () => {

    return(
        <div className="d-flex flex-column related-articles-page">

            <h1 className='display-3'>Related Articles</h1>

            <div className="card mb-3 d-flex align-items-center container related-articles-card">
                <img className="card-img-top article-picture" src="https://media1.fdncms.com/saltlake/imager/garage-grit/u/original/2700257/header.jpg" alt="Auto Shop" />
                <div className="card-body d-flex justify-content-center flex-column text-center">
                    <h5 className="card-title">Garage Grit</h5>
                    <p className="card-text">In the shadow of Rio Tinto Stadium, garage owner Robbie Maupin fights a municipal land grab.</p>
                    <a href="https://www.cityweekly.net/utah/garage-grit/Content?oid=2700255" target='_blank' rel="noopener noreferrer" className='btn btn-primary text-white'>See Article</a>
                </div>
            </div>

            {/* <div className="card mb-3 d-flex align-items-center container related-articles-card">
                <img className="card-img-top article-picture border-bottom" src="https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Auto Shop" />
                <div className="card-body d-flex justify-content-center flex-column text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-primary'><a href="https://www.cityweekly.net/utah/garage-grit/Content?oid=2700255" target='_blank' rel="noopener noreferrer" className='text-white'>Visit Website</a></button>
                </div>
            </div> */}

        </div>
    )
}

export default RelatedArticles