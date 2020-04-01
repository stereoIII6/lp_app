import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Input,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class OrderForm extends Component {
  state = {
    code: "",
    addToItemPrice: 0,
    amnt: 1,
    item: {},
    order: [],

    name: "",
    tel: "",
    email: "",
    pin: "",
    addrss: "",
    user: [],

    seek: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeSeek = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({});
  };
  onAmount = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addAmount = e => {
    console.log(this.state.amnt);
    this.setState({ amnt: parseInt(this.state.amnt) + 1 });
  };
  subAmount = e => {
    this.setState({ amnt: parseInt(this.state.amnt) - 1 });
  };
  submitItem = e => {
    this.setState({
      item: {
        code: this.state.code,
        amnt: this.state.amnt,
        price: this.state.amnt * (40 + this.state.addToItemPrice)
      }
    });

    this.setState({ order: [...this, this.state.item] });
    this.setState({ code: "", addToItemPrice: 0, amnt: 1, item: {} });
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col style={{ height: "500px" }}>
            <img src="bottle.png" alt="" style={{ height: "100%" }} />
          </Col>
          <Col>
            <Form>
              <FormGroup row style={{ marginTop: "3rem" }}>
                <Col>
                  <Label for="exampleSelect" sm={12}>
                    <b>Ihre Bestellung</b>
                  </Label>
                </Col>
                <Col sm={3}>
                  <Input
                    type="text"
                    name="code"
                    id="code"
                    onChange={this.onChange}
                  />
                </Col>

                <Col sm={3}>
                  <InputGroup>
                    <InputGroupAddon
                      addonType="prepend"
                      onClick={this.subAmount}
                    >
                      <InputGroupText>-</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="amnt"
                      id="amnt"
                      value={this.state.amnt}
                      onChange={this.onAmount}
                    />
                    <InputGroupAddon
                      addonType="append"
                      onClick={this.addAmount}
                    >
                      <InputGroupText>+</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>

                <Col sm={{ size: 12 }} style={{ marginTop: "1rem" }}>
                  <Button style={{ width: "100%" }}>In den Warenkorb</Button>
                </Col>
              </FormGroup>
            </Form>
            <hr></hr>
            <Form>
              <FormGroup>
                {" "}
                <Col>
                  <Label for="exampleSelect" sm={12}>
                    * <b>Sie haben noch keinen Duftcode ?</b> <br></br>Tippen
                    Sie einfach den Namen Ihres gesuchten Duftes ein ... Sie
                    werden auf die Scentral Suchseite weitergeleitet und finden
                    dort Ihren Duftcode !
                  </Label>
                </Col>
                <Col sm={{ size: 12, offset: 0 }}>
                  <Input
                    type="text"
                    name="seek"
                    id="exampleSelect"
                    placeholder="zB. Tony Balloni Totally Mine 2020 ..."
                    onChange={this.onChangeSeek}
                    style={{ marginBottom: "1em" }}
                  />
                </Col>
                <Col>
                  <Button
                    tag="a"
                    style={{ width: "100%" }}
                    href={`https://api.whatsapp.com/send?phone=+4917664085283&text=${this.state.seek}&source=&data=web`}
                    target="_blank"
                  >
                    Whatsapp
                  </Button>
                  <Button style={{ width: "100%" }}>Email</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <ListGroup
            style={{ marginBottom: "3em", marginTop: "3em", width: "100%" }}
          >
            <ListGroupItem color="success">Warenkorb</ListGroupItem>
            <ListGroupItem color="warning">
              Der Korb ist noch leer !
            </ListGroupItem>
          </ListGroup>
        </Row>
      </React.Fragment>
    );
  }
}

export default OrderForm;
