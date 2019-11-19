import React, { Component } from "react";
import BKSunset from "../Resources/BKCross2.jpg";
import { Parallax } from "react-parallax";

class Beliefs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Mission">
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">BELIEFS</div>
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="contentBeliefs">
          <ul className="ourBeliefs">
            <li key="1">
              We believe in one God! He’s the Creator of all things and reveals
              Himself as Father, Son, and Spirit. (Genesis 1:1; Matthew 3:16-17,
              28:19-20; 2 Corinthians 13:14)
            </li>
            <li key="2">
              We believe in who Jesus Christ is and was and that He became like
              us, yet sinless, to bring about our salvation. (Matthew 1:20,
              16:15; John 1:1-18)
            </li>
            <li key="3">
              We believe in the Holy Spirit, who is active in our world,
              bringing us to salvation. (John 14:15-18, 16:7-15; Acts 2:1-4;
              Romans 8:1-17)
            </li>
            <li key="4">
              We believe that the Bible is the fully inspired Word of God. It
              gives us all we need to know about how to be saved and how we
              should live. (2 Timothy 3:15; 2 Peter 1:20-21)
            </li>
            <li key="5">
              We believe that we are all sinners by both our nature and our acts
              and we need God’s forgiveness and cleansing. (Genesis 3; Romans
              3:23, 5:14, 6:15-23, 7:15-18)
            </li>
            <li key="5">
              We believe that Jesus Christ died on the Cross and that we must
              believe in Him, His death and His resurrection to be restored to a
              right relationship with God. (Isaiah 53:6-7; John 3:14-17)
            </li>
            <li key="5">
              We believe God helps us turn to Him from our sin. He doesn’t force
              us but gives us that choice to accept Him. (Genesis 2:16-17; John
              1:12; Galatians 6:7-8)
            </li>
            <li key="5">
              We believe each person must confess their sin, turn away from
              their sin, and trust Christ to accept them. (Isaiah 55:6-7; Acts
              17:30; 1 John 1:8-9)
            </li>
            <li key="5">
              We believe that after we are adopted into God’s family, we need to
              commit our entire life to Him, He purifies our hearts and cleanses
              our spirit. He fills us with His perfect love and gives us
              strength and power to live our lives for Him daily. (Ezekiel
              36:25-27; John 17:16-19; 1 Thessalonians 5:22-23)
            </li>
            <li key="5">
              We believe that the church is the active body of Christ in the
              world today. The church is made up of people, called together by
              the Holy Spirit, to fulfill God’s plan and purpose for the world
              until Jesus returns. (1 Corinthians 12:12-31; Ephesians 5:25-27)
            </li>
            <li key="5">
              We believe that Christians should be baptized. (Matthew 28:16-20;
              Acts 2:37-41)
            </li>
            <li key="5">
              We believe in communion; participating in the Lord’s Supper.
              (Matthew 26:26-29; 1 Corinthians 11:23-32)
            </li>
            <li key="5">
              We believe God can heal. We pray for healing. (2 Corinthians
              12:7-10; James 5:13-16)
            </li>
            <li key="5">
              We believe that Jesus is coming again. (John 14:1-3; 1
              Thessalonians 4:13-18)
            </li>
            <li key="5">
              We believe everyone is accountable to God and will face His
              judgment and receive His rewards and punishments. (Matthew
              25:31-46; Revelation 20:11-15)
            </li>
          </ul>
        </div>
        <Parallax
          strength={this.props.parallaxStrength}
          bgImage={BKSunset}
          bgImageAlt="the cat"
        >
          <div className="parallaxTitle">VALUES</div>
          <div className="parallaxSpace"></div>
        </Parallax>
        <div className="contentValues">
          <h2>Worship</h2>
          <p>
            Our story will be about attaching ultimate value upon God “…you must
            love the Lord your God with all your heart, all your soul, all your
            mind, and all your strength.” Mark 12:29
          </p>
          <h2>Discipleship</h2>
          <p>
            Our story will be about learning to follow and obey Jesus Christ
            “…Teach these new disciples to obey all the commands I have given
            you.” Matthew 28:20
          </p>
          <h2>Evangelism</h2>
          <p>
            Our story will be about reaching those who God longs for “Therefore,
            go and make disciples of all the nations, baptizing them in the name
            of the Father and the Son and the Holy Spirit” Matthew 28:18
          </p>
          <h2>Fellowship</h2>
          <p>
            Our story will be about living in community with other believers “So
            now I am giving you a new commandment: Love each other. Just as I
            have loved you, you should love each other. Your love for one
            another will prove to the world that you are my disciples.” John
            13:34-35
          </p>
          <h2>Service</h2>
          <p>
            Our story will be about using our God given gifts in ministry to
            others “Love your neighbor as yourself” Mark 12:30
          </p>
        </div>
      </div>
    );
  }
}

export default Beliefs;
