import './IndexPage.css';
import my_image from './resources/me.jpg';

const IndexPage = () => {
  return (
    <div className="page-container">
      <div className="left-split">
        <h1><highlight>about me: </highlight></h1>
        <ul>
          <li>
            <highlight>work</highlight>
            <ul>
              <li>apple</li>
              <li>google</li>
            </ul>
          </li>
          <li>
            <highlight>education</highlight>
            <ul>
              <li>vit</li>
              <li>dps</li>
              <li>presidency</li>
            </ul>
          </li>
          <li><highlight>achievements</highlight></li>
        </ul>
      </div> 

      <div className="right-split">
        <img src={my_image} alt="im so handsome it isnt loading me right" style={{width: "90%", margin: "5%"}}/>
        <contact>
          <ul>
            <li><highlight>phone: </highlight>1234567890</li>
            <li><highlight>email: </highlight>kkk@gmail.com</li>
            <li><highlight>github: </highlight>https://github.com/</li>
            <li><highlight>linkedin: </highlight>https://linkedin</li>
          </ul>
        </contact>
      </div> 
    </div>
  )
}

export default IndexPage;