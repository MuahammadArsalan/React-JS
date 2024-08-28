function Card(props){
return (

    <>
  <div className="mt-5 gap-4 flex flex-wrap justify-center items-center">
    
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
src={props.src}      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}!</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}!</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-">
  <figure>
    <img
src={props.src}      alt="Shoes" className="w-[300px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}!</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    
  
    </div>  
    </>
)


}


export default Card