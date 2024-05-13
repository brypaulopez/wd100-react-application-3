const GridCard = (props) => {
    return ( 
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={props.img} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate dolores soluta, quam nam modi, cumque ad quos neque culpa quae magni adipisci veritatis omnis, rem fugiat delectus quia voluptates!</p>
                        <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default GridCard;