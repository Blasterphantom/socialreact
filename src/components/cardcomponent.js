import { Col, Container, Row } from "react-bootstrap";
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import instagram from '../assets/icon-instagram.svg';
import youtube from '../assets/icon-youtube.svg';
import up from '../assets/icon-up.svg';
import down from '../assets/icon-down.svg';

export default function CardComponent({ isToggled, social, number, overview }) {


  return (
    <Container className="cardContainer">
        <Row className="cardRow">
            <Col className="cardCol">
                <div className={`cardDivFacebook ${isToggled ? "" : "cardDivFacebookLight"}`}>
                    <div className="cardInfo">
                        <Row className="facebookPicRow">
                            <img className="facebookPic" src={facebook} />
                            <h5 className={`atText ${isToggled ? "" : "atTextLight"}`}>{social.at}</h5>
                            <h1 className={`numberText ${isToggled ? "" : "numberTextLight"}`}><strong>{number.number1}</strong></h1>
                            <p className={`followerText ${isToggled ? "" : "followerTextLight"}`}>F O L L O W E R S</p>
                            <Row className="upDownRow">
                                <img className="upPic" src={up} />
                                <p className="upDownText">12 Today</p>
                            </Row>
                        </Row>
                    </div>
                </div>

            </Col>
            <Col className="cardCol">
                <div className={`cardDivTwitter ${isToggled ? "" : "cardDivTwitterLight"}`}>
                    <Row className="cardInfoRow">
                        <div className="cardInfo">
                            <Row className="facebookPicRow">
                                <img className="facebookPic" src={twitter} />
                                <h5 className={`atText ${isToggled ? "" : "atTextLight"}`}>{social.at}</h5>
                                <h1 className={`numberText ${isToggled ? "" : "numberTextLight"}`}><strong>{number.number2}</strong></h1>
                            <p className={`followerText ${isToggled ? "" : "followerTextLight"}`}>F O L L O W E R S</p>
                            <Row className="upDownRow">
                                <img className="upPic" src={up} />
                                <p className="upDownText">99 Today</p>
                            </Row>
                            </Row>
                        </div>
                    </Row>
                </div>

            </Col>
            <Col className="cardCol">
                <div className={`cardDivInstagram ${isToggled ? "" : "cardDivInstagramLight"}`}>
                    <div className="instaBorder"></div>
                    <div className="cardInfo">
                        <Row className="facebookPicRow">
                            <img className="facebookPic" src={instagram} />
                            <h5 className={`atText ${isToggled ? "" : "atTextLight"}`}>{social.at}</h5>
                            <h1 className={`numberText ${isToggled ? "" : "numberTextLight"}`}><strong>{number.number3}</strong></h1>
                            <p className={`followerText ${isToggled ? "" : "followerTextLight"}`}>F O L L O W E R S</p>
                            <Row className="upDownRow">
                                <img className="upPic" src={up} />
                                <p className="upDownText">1099 Today</p>
                            </Row>
                        </Row>
                    </div>
                </div>

            </Col>
            <Col className="cardCol">
                <div className={`cardDivYoutube ${isToggled ? "" : "cardDivYoutubeLight"}`}>
                    <div className="cardInfo">
                        <Row className="facebookPicRow">
                            <img className="facebookPic" src={youtube} />
                            <h5 className={`atText ${isToggled ? "" : "atTextLight"}`}>{social.at}</h5>
                            <h1 className={`numberText ${isToggled ? "" : "numberTextLight"}`}><strong>{number.number4}</strong></h1>
                            <p className={`followerText ${isToggled ? "" : "followerTextLight"}`}>S U B S C R I B E R S</p>
                            <Row className="upDownRow">
                                <img className="upPic" src={down} />
                                <p className="upDownTextRed">1099 Today</p>
                            </Row>
                        </Row>
                    </div>
                </div>

            </Col>
        </Row>

        <Row className="cardRow2">
            <h1 className={`overviewText ${isToggled ? "" : "overviewTextLight"}`}>Overview - Today</h1>
        </Row>

        <Row className="cardRow">
            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Page Views</h5>
                        <img className="facebookPic" src={facebook} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview1}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="upPic" src={up}/>
                            </div>
                            <h5 className="smallCheckText">3%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>

            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Likes</h5>
                        <img className="facebookPic" src={facebook} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview2}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="downPic" src={down}/>
                            </div>
                            <h5 className="smallCheckTextRed">2%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>

            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Likes</h5>
                        <img className="facebookPic" src={instagram} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview3}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="upPic" src={up}/>
                            </div>
                            <h5 className="smallCheckText">2257%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>

            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Profile Views</h5>
                        <img className="facebookPic" src={instagram} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview4}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="upPic" src={up}/>
                            </div>
                            <h5 className="smallCheckText">1375%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>
        </Row>

        <Row className="cardRow">
            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Retweets</h5>
                        <img className="facebookPic" src={twitter} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview5}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="upPic" src={up}/>
                            </div>
                            <h5 className="smallCheckText">303%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>

            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Likes</h5>
                        <img className="facebookPic" src={twitter} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview6}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="upPic" src={up}/>
                            </div>
                            <h5 className="smallCheckText">553%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>

            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Likes</h5>
                        <img className="facebookPic" src={youtube} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview7}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="downPic" src={down}/>
                            </div>
                            <h5 className="smallCheckTextRed">19%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>

            <Col className="cardCol">
                <div className={`donutWrapper ${isToggled ? "" : "donutWrapperDark"}`}>
                <div className={`smallBox ${isToggled ? "" : "smallBoxDark"}`}>
                    <Row className="smallRow">
                        <h5 className={`smallText ${isToggled ? "" : "smallTextLight"}`}>Total Views</h5>
                        <img className="facebookPic" src={youtube} />
                    </Row>
                    <Row className="smallRow">
                        <h5 className={`smallNumberText ${isToggled ? "" : "smallNumberTextLight"}`}>{overview.overview8}</h5>
                        <div className="smallDiv">
                            <div className="arrowDiv">
                                <img className="downPic" src={down}/>
                            </div>
                            <h5 className="smallCheckTextRed">12%</h5>
                        </div>
                    </Row>
                </div>
                </div>
            </Col>
        </Row>
        
    </Container>
  );
}
