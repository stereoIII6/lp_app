import React from "react";
import TopMenu from "./comps/topMenu";
import AboutUs from "./comps/aboutUs";
import OrderForm from "./comps/orderForm";
import "./App.css";
import {
  Jumbotron,
  Container,
  ListGroup,
  ListGroupItem,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <TopMenu style={{ position: "relative", top: 0, zIndex: 10 }} />

      <div
        style={{
          position: "relative",
          top: "0px",
          height: "400px",
          margin: 0,
          padding: 0,
          overflow: "hidden"
        }}
      >
        <AboutUs></AboutUs>
      </div>
      <Jumbotron
        style={{
          background: "black",
          padding: 0,
          margin: 0,
          height: "auto",
          color: "ivory",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontSize: "1.5em",
          fontWeight: "900",
          letterSpacing: "1.5em",
          borderRadius: 0
        }}
      >
        <div style={{}}>ENTDECKE DEINEN DUFT</div>
      </Jumbotron>
      <Container>
        <div className="alert-danger alert mt-3">
          <b> ACHTUNG ! </b>
          <br /> Aufgrund der CoVid-19 Kontaktsperre bleiben unsere Filialen
          leider bis auf weiteres geschlossen. Sie können unsere Produkte aber
          über unsere Webseite oder Telefonisch bestellen und sich per Post
          zusenden lassen !{" "}
        </div>
        <OrderForm />
      </Container>
      <div
        style={{
          background: "black",
          color: "ivory",
          paddingTop: "1em",
          paddingBottom: "5em"
        }}
      >
        <Container>
          <ListGroup color="dark" horizontal>
            <ListGroupItem color="dark">
              <b>LE PARFUM DUFTMANUFAKTUR BERLIN</b>
              <br />
              <p>
                Pichelsdorfer Strasse 146
                <br />
                13595 Berlin-Spandau
                <br />
                info@leparfumberlin.de
              </p>
            </ListGroupItem>
            <ListGroupItem color="dark">
              <b>
                {" "}
                Finden size den Duftcode zu deinem Lieblingsduft auf
                http://scentral.ml
              </b>
              <br />
              <Form action="https://scentral.herokuapp.com" target="_blank">
                <FormGroup style={{ marginTop: "2em" }}>
                  <Col sm={{ size: 12, offset: 0 }}>
                    <Input
                      type="text"
                      name="seek"
                      id="seek"
                      placeholder="zB. Tony Balloni Totally Mine 2020 ..."
                      style={{ marginBottom: "1em" }}
                    />
                  </Col>
                  <Col sm={{ size: 12 }}>
                    <Button style={{ wsidth: "100%" }}>
                      Scentral Duftsuche
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </ListGroupItem>
            <ListGroupItem color="dark">
              <b>Öffnungszeiten</b>
              <p>
                MO-FR : 12:00-19:00 UHR
                <br />
                SA : 12:00-18:00 UHR
                <br />
                <b className="alert-danger" style={{ fontSize: "1.2em" }}>
                  {" "}
                  ACHTUNG WEGEN COV_id19 VORÜBERGEHEND GESCHLOSSEN{" "}
                </b>
              </p>
            </ListGroupItem>
          </ListGroup>
        </Container>
        <div
          style={{
            height: "50px",
            marginTop: "25px",
            textAlign: "center",
            color: "grey"
          }}
        >
          &copy; LE PARFUM 2020. Alle Rechte vorbehalten. <br></br>Design + Code
          by stereoIII6 of Goldman Sucks
        </div>
      </div>
    </div>
  );
}

export default App;
