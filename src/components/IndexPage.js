import "./IndexPage.css";
import my_image from "./resources/me.jpg";

const IndexPage = () => {
  return (
    <div className="page-container">
      <div className="left-split">
        <div style={{ fontSize: "50px" }}>
          <highlight>About me: </highlight>
        </div>
        <>
          <p>
            My name is Krishna Kenny, and I want to change the world. I want to
            become rich and famous and do all the awesome things that I see
            people doing on social media. I'm not looking for shortcuts; I'm
            looking for a challenge — something to burn through with the fire in
            me. I have a lot of energy, and it just needs direction.
          </p>
          <p>
            I don't want a job. I don't want to be a software engineer or a web
            developer or whatever the names are. I want to solve a problem,
            whether that means coding an app, building a gadget, or selling
            shoes, for all I know. I'm tired of doing all the useless things
            school and college make you do, things that nobody in the real world
            cares about. I have learned a lot of things on the side of
            academics, and I want to put them to use. And, of course, all the
            useful stuff from academics as well.
          </p>
          <p>
            <highlight>
              Everyone has their part in the grand game of life. I am just
              trying to find mine and hopefully have some good times along the
              way.
            </highlight>
          </p>
        </>
      </div>

      <div className="right-split">
        <img
          src={my_image}
          alt="I'm so handsome it isn't loading my pic right!"
          style={{ width: "90%", margin: "5%" }}
        />
        <contact>
          <ul>
            <li>
              <highlight>phone: </highlight>1234567890
            </li>
            <li>
              <highlight>email: </highlight>kkk@gmail.com
            </li>
            <li>
              <highlight>github: </highlight>https://github.com/
            </li>
            <li>
              <highlight>linkedin: </highlight>https://linkedin
            </li>
          </ul>
        </contact>
      </div>
    </div>
  );
};

export default IndexPage;
