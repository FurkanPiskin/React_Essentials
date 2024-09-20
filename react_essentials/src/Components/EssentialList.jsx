
import "./essentiallist.css"
import jsxUi from "../Assets/jsx-ui.png"
import Components from "../Assets/Components.png"
import Config from "../Assets/Config.png"
import State from "../Assets/state-mgmt.png"

function EssentialList() {
  return (
    <div className="List">
        <div className="container">
            <div className="list-item-wrapper">
                <h3>Core Concepts</h3>
            <ul className="items">
                <li className="item">
                  <div className="image">
                  <img src={Components} alt="" />
                  </div>
                 <div className="title">
                    <span>Components</span>
                 </div>
                  <div className="info">
                    <p>The core UI building 
                        <p>block-compose the</p>
                        <p>the user interface by </p>
                        <p>combining multiple</p>
                        components
                    
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="image">
                  <img src={jsxUi} alt="" />
                  </div>
                 <div className="title">
                    <span>JSX</span>
                 </div>
                  <div className="info">
                    <p>The core UI building 
                        <p>block-compose the</p>
                        <p>the user interface by </p>
                        <p>combining multiple</p>
                        components
                    
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="image">
                  <img src={Config} alt="" />
                  </div>
                 <div className="title">
                    <span>Props</span>
                 </div>
                  <div className="info">
                    <p>The core UI building 
                        <p>block-compose the</p>
                        <p>the user interface by </p>
                        <p>combining multiple</p>
                        components
                    
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="image">
                  <img src={State} alt="" />
                  </div>
                 <div className="title">
                    <span>State</span>
                 </div>
                  <div className="info">
                    <p>The core UI building 
                        <p>block-compose the</p>
                        <p>the user interface by </p>
                        <p>combining multiple</p>
                        components
                    
                    </p>
                  </div>
                </li>

            </ul>
            </div>
        </div>
    </div>
  )
}

export default EssentialList