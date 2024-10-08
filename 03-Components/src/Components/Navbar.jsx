import "./custom.css"

function Navbar(){
 return(
  <>

  <div className="navbar bg-base-200 flex justify-between mt-auto ">
    <div>
      <img src="https://www.bata.com.pk/cdn/shop/files/Bata-logo_1.png?v=1686635439&width=500" className="w-[15rem] h-[2.5rem] ml-4 bg-transparent" alt="" />
  <button className="btn btn-ghost text-3xl text-center" id="nav-text"></button>

    </div>
    <div>
    <div className="avatar">
  <div className="w-12 h-12 rounded-full">
    <img src="data:image/jpeg;base64,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" />
  </div>
</div>
    </div>

</div>



  
  </>
 )
  
}

export default Navbar
