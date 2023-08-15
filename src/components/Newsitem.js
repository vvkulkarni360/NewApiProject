import React from 'react'

const Newsitem= (props)=> {
        let {title,description,imageurl,newsurl,author,date}=props
        return (
            <div className='my-5'>
                <div className="card">
                    <img src={imageurl} className="card-img-top" alt="Loading..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitem