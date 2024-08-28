import "./custom.css"



function Card(props){

function buy(){
    alert('This functionality bring Soon....')
}


return (

    <>
    
  <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={props.src}
      alt="Shoes" className="w-[320px] h-[200px] rounded-lg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title" id="title">Shoes!</h2>
    <p id="desc"> {props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" id="buy-btn" onClick={buy}>Buy Now</button>
    </div>
  </div>
</div>
  
    </>
)


}


export default Card