import "./App.css";
import Home from "./component/Home";
import Header from "./component/layout/Header";
import AddReview from "./component/review/AddReview";
import YoutubeVideo from "./component/training/YoutubeVideo";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import Menu from "./component/training/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListReview from "./component/review/ListReview";
import Users from "./component/users/Users";
import NotFound from "./component/pages/NotFound";
import AboutUs from "./component/pages/AboutUs"

const App = () => { 
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        
        <Container>
          <Row>
            {/* <Col md={2} className="">
              <Menu />
              
            </Col> */}
            <Col md={12} className="">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/add-review" component={AddReview} exact />
                <Route path="/list-review" component={ListReview} exact />
                <Route path="/users" component={Users} exact />
                <Route path="/youtube" component={YoutubeVideo} exact />
                <Route path="/about-us" component={AboutUs} exact />
                <Route path="/component-one" component = {Header}/>
                <Route path="/component-two" component = {Home}/>
                <Route component={NotFound} exact />
              </Switch>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
