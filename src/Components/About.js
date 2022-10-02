import React from 'react'


export default function About(props) {
    // const [MyStyle, setMyStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white",
    // })
    let MyStyle={
      color:props.mode==="dark"?"white":"black",
      backgroundColor:props.mode==="dark"?"hwb(210deg 29% 25%)":"white",
      border:'2px, solid',
      borderColor:props.mode==="dark"?"white":"hwb(210deg 29% 25%)"

    }

  return (
    <div className='container mt-5'>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" style={MyStyle}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" style={MyStyle} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        This is an easy way to analyze and organize your text. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        This is completely free to use. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
       This website is completely browser compatible.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
