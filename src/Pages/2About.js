import React, { Component } from "react";
import BKAbout from "../Resources/BKCross2.jpg";
import BKHistory from "../Resources/BKBible.jpg";
import { Parallax } from "react-parallax";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    if (this.props.currentSubPage === "history")
    {
      //go to history section of page

    }
  }
  render() {
    return (
      <div className="About">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKAbout}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">ABOUT</div>
          <div className="parallaxSpacePrimary"></div>
        </Parallax>
        <div className="content contentAbout">
          <h3>About Us</h3>
          <p className="aboutParagraph">
            The church of the Nazarine has been an upstanding member of the
            cumminity for more than 500 years, and has been a blessing for the
            lost and broken in the greater Kennewick area. Jesus loves you, and
            so does the Church of the Nazarine
          </p>
          <h1>Vision</h1>
          <h3>Our Mission</h3>
          <p>
            “We exist to live, tell, and teach God’s life changing story to
            people and to lead those people into a vibrant ever growing love
            relationship with Jesus Christ so that they can go and do likewise.”
          </p>
          <h3>Our Purpose</h3>
          <p>
            The Great Commandment :: “The most important commandment is this:
            ‘Hear, O Israel! The Lord our God is the one and only Lord. And you
            must love the Lord your God with all your heart, all your soul, all
            your mind, and all your strength.’ The second is equally important:
            ‘Love your neighbor as yourself.’ No other commandment is greater
            than these.” Mark 12:29-31 (NLT)
          </p>
          <p>
            The Great Commission :: “I have been given complete authority in
            heaven and on earth. Therefore, go and make disciples of all the
            nations, baptizing them in the name of the Father and the Son and
            the Holy Spirit. Teach these new disciples to obey all the commands
            I have given you. And be sure of this: I am with you always, even to
            the end of the age.” Matthew 28:18-20 (NLT)
          </p>
          <p>
            If you’d like more information click here to download a full vision
            document
          </p>
        </div>
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKHistory}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">HISTORY</div>
          <div className="parallaxSpaceSecondary"></div>
        </Parallax>
        <div className="content contentHistory">
          <h3>Portage First Church</h3>
          <p className="aboutParagraph">
            In the late 90s God was on the move at First Church of the Nazarene
            in Portage, Indiana. In their quest to connect seekers and believers
            to real life in Jesus Christ, the leadership at First Church decided
            to plant a new work. Pastor Richard Schmidt and his wife Stacey
            began to draw together a team of people to move forward with them
            into this new work located in the neighboring town of Valparaiso. A
            group of faithful Christ followers answered God’s call to partner
            with the Schmidt’s and a new expansion of God’s kingdom was
            underway.
          </p>
          <h3>Living Hope Community Church</h3>
          <p>
            Living Hope Community Church in Valparaiso quickly became a place
            dedicated to connecting people to God, to each other, and to a world
            in need of God’s love. People who “would never step foot in another
            church” came and were made new. Lives were changed, people were
            transformed and the kingdom continues to expand because of the
            faithful work being done at Living Hope. As Living Hope entered its
            fifth year a core group shaped by all they had learned at Living
            Hope became convinced that God was calling them to continue that
            expansion in Washington State. Living Hope is continuing to reach
            out to the world both locally in Valparaiso and through their
            sacrificial support and guidance of this new work; Story Point
            Community Church.
          </p>
          <h3>Story Point Community Church</h3>
          <p>
            The story of SPCC is still in the early chapters, and much of this
            tale remains to be told. The setting has changed from the Regal
            Columbia Center movie theater to our current location in historic
            downtown Kennewick, but our quest remains the same. Regardless of
            how many circumstances change, the leadership at Story Point
            Community Church will always be thankful for the heritage that has
            shaped and lead the ministry to where it is today. We look forward
            to continuing in the footsteps of ourparent church, grandparent
            church, the Church of the Nazarene, and the followers of the Way of
            Christ throughout history.
          </p>
          <p>
            * Since the planting of Living Hope, Portage First Church of the
            Nazarene has changed their name to Real Life Community Church — a
            church of the Nazarene.
          </p>
        </div>
      </div>
    );
  }
}

export default About;