import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import About from "./About";
import ShowPhotos from "./ShowPhotos"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path ="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    // console.log('CHECK IF FIRING');
    fetch('https://api.tumblr.com/v2/blog/alxtng.tumblr.com/posts?limit=50&api_key=6EoBI1MKO1yikEq2btHFUTGzZWAdvwzx3NIr7OTCOksb2NWyvR')
      .then(async resp => {
        if(!resp.ok){
          throw Error('Unsuccessful fetch');
        }
        try {
              const data = await resp.json();
              this.setState({ photos: data.response.posts });
            //   this.state.photos.map(pic => {
            //       console.log('CHECKIFFIRING', pic.photos.0);
            //   });
          } catch (err) {
              throw Error(err.message);
          }
      });
    }

  render(){
    console.log('HOME');
    return(
      <div className='container'>
        <ShowPhotos photos={this.state.photos} />
        {/* <h1>HOME PAGE</h1> */}
        {/* <img className='pics' src='https://64.media.tumblr.com/79a6584b4e945300b0293bad79097a71/tumblr_pxw7v5A6qJ1tseuhno1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/f3847aa3ab829841b85ea33323f159e1/tumblr_pf3x8hpTP51tseuhno1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/043141679e044d39be3f4e59bcf3c25c/tumblr_oy7afenRBH1tseuhno2_r1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/c25751a776c12cefa7ddbb4460670425/tumblr_pikizxF6qc1tseuhno1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/84f62ad06217e675fc6b1e81a11a2046/tumblr_pikiypUL9h1tseuhno1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/54c86d9bbd3af19201cb0ff63e2d508a/tumblr_oiutb5joUt1tseuhno1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/8c8208b06557694843509d5a9365ba65/tumblr_oh2rl6zflD1tseuhno1_1280.jpg' alt="Test" />
        <img className='pics' src='https://64.media.tumblr.com/bc660719e053c2014f84a93b6fb30ca0/tumblr_ocnjwdAh591tseuhno1_1280.jpg' alt="Test" /> */}
      </div>
    )
    }
}

export default App;