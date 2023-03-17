import { Col, Container, Row } from "react-bootstrap";

export default function HomeComponent({ isToggled, handleToggle }) {
  return (
    <Container id="homeContainer" className={`homeContainer ${isToggled ? "homeContainerDark" : ""}`}>
      <Row className="homeRow">
        <Col className="homeCol">
          <div className="textBox">
            <h1 className={`text ${isToggled ? "textDark" : ""}`} id="text">
              Social Media Dashboard
            </h1>
            <h3 className={`text2 ${isToggled ? "text2Dark" : ""}`} id="text2">
              Total Followers: 23,004
            </h3>
          </div>
        </Col>
      </Row>
      <Row className="darkModeRow">
        <div className="buttonBox">
          <h3 className={`darkModeText ${isToggled ? "darkModeTextDark" : ""}`}>Dark Mode</h3>
          <label>
            <input type="checkbox" onClick={handleToggle} />
            <span />
          </label>
        </div>
      </Row>
    </Container>
  );
}
