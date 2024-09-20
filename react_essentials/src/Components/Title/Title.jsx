import ReactCore from "../../Assets/react-core-concepts.png"
import "./title.css"
function Title() {
  return (
    <div className='Title'>
        <div className="container">
            <div className="title-wrapper">
                <div className="react-logo">
                 <i>  <img src={ReactCore} alt="" /></i> 
                </div>
                <h1>REACT ESSENTİALS</h1>
                <div className="title-text">
                    <p>Crucial React concepts you will need for almost any app you are going to build</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Title