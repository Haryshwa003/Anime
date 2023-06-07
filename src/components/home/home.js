import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menuicon from './list.svg'
import anime from './ANIME.svg'
import wallpaper from './1314533.jpeg'
import startcircle from './skip-start-circle.svg'
import levi from './levi.jpg'
import zeke from './zeki.jpg'
import erwin from './erwin.jpg'
import './home.css'
import aot from './508247.jpg'
import naruto from  './413842.jpg'
import bleach from './593278.jpg'
import demon from './2499.jpg'
import juj from './1299030.png'
import video from './videoplayback.mp4'
import anime1 from './938784.jpg'
import anime2 from './278485.jpg'
import anime3 from './berserk.png'
import anime4 from './jojo.png'
import anime5 from './onepiece.jpg'
import anime6 from './hori.jpg'
import anime7 from './plas.jpg'
import anime8 from './677543.jpg'
import anime9 from './723534.png'
import anime10 from './tora.png'
import anime11 from './anime11.jpg'
import anime12 from './anime12.jpg'
import anime13 from './anime13.jpg'
import anime14 from './anime14.jpg'
import anime15 from './anime15.jpg'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const myStyle={
      backgroundImage: "url('https://images8.alphacoders.com/131/1314533.jpeg')",
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
     
  };
  const outer={
   
    width: '100%',
    position: 'fixed',
    left: '0%',
   
  }

  const navbar={
      backgroundColor: "#ff3131",
      color:'white !important'
  }
  const history={
    position:"fixed",
    left:"2%",
    width:"3%"
  }
  const pics={
    width: "100%",
    height: "inherit"
  }
    return (
      // <div className='home' style={myStyle}>
      // </div>
      
      <div style={outer}>
         <Offcanvas class="canvas" show={this.state.show} onHide={this.handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Recent</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul style={{ fontSize: '20px',listStyleType: 'none' }}>
          <li style={{ marginBottom: '8px' }}>
        <span style={{ marginRight: '8px' }}> <img src={startcircle}/></span>
        Naruto
      </li>
      <li style={{ marginBottom: '8px' }}>
        <span style={{ marginRight: '8px' }}><img src={startcircle} /></span>
        Attack on Titan
      </li>
      <li style={{ marginBottom: '8px' }}>
        <span style={{ marginRight: '8px' }}><img src={startcircle} /></span>
        One Piece
      </li>
      <li style={{ marginBottom: '8px' }}>
        <span style={{ marginRight: '8px' }}><img src={startcircle} /></span>
        Dragon Ball Z
      </li>
      <li style={{ marginBottom: '8px' }}>
        <span style={{ marginRight: '8px' }}><img src={startcircle} /></span>
        Death Note
      </li>
      <li style={{ marginBottom: '8px' }}>
        <span style={{ marginRight: '8px' }}><img src={startcircle}style={{ color: 'white !important' }} /></span>
        Fullmetal Alchemist: Brotherhood
      </li>
    </ul>
          </Offcanvas.Body>
        </Offcanvas>
      <div style={myStyle}>
        
      <Navbar   expand="lg" style={navbar} >
      <Container>
      <img src={menuicon}  onClick={this.handleShow} style={history} />
        <Navbar.Brand href="#home">ANIME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Top</Nav.Link>
            <Nav.Link href="#link">Latest</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Sci-fi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <div className='mainpage'>
    <div className='content'>
    {/* */}

{/*  */}
<div className="flex-container-overall">
  <div> 
    <div className="flex-container">
  <div className='first'>
  <video controls className="video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  </div>
  <div className='second' >


    <div><h2>Artists</h2></div>
    <div className='artisttext'> <img src={levi} className='artist'/> Levi-Hiroshi Kamiya</div>
    <div  className='artisttext'> <img src={zeke} className='artist'/> Zeke-Takehito Koyasu</div>
    <div  className='artisttext'> <img src={erwin} className='artist'/> Erwin-Daisuke Ono</div>
  </div>
  <div className='second'><h2>Season-3</h2>
  Attack on Titan Season 3 is the third season of the popular anime series "Attack on Titan" based on Hajime Isayama's manga. The third season is divided into two parts: Part 1, consisting of 12 episodes, and Part 2, consisting of 10 episodes. Here's a synopsis of Attack on Titan Season 3:
  </div>
</div>
</div>

<div class="epi">Episodes
<div class="flex-containerepi">
  <div>
    1</div>
  <div>2</div>
  <div>3</div>  
   <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>  
   <div>9</div>
  <div>10</div>  
  <div>11</div>
  <div>12</div>
  <div>13</div>  
   <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>  
   <div>19</div>
  <div>20</div>
</div>
<div class="flex-containerepi">
    
  <div>21</div>
  <div>22</div>
  <div>23</div>  
   <div>24</div>
  <div>25</div>
  <div>26</div>
  <div>27</div>
  <div>28</div>  
   <div>29</div>
  <div>30</div> 
  <div>31</div>
  <div>32</div>
  <div>33</div>  
   <div>34</div>
  <div>35</div>  
  <div>36</div>
  <div>37</div>
  <div>38</div>  
   <div>39</div>
  <div>40</div>
</div>
<div class="flex-containerepi">
 
  <div>41</div>
  <div>42</div>
  <div>43</div>  
   <div>44</div>
  <div>45</div> 
  <div>46</div>
  <div>47</div>
  <div>48</div>  
   <div>49</div>
  <div>50</div> 
  <div>51</div>
  <div>52</div>
  <div>53</div>  
   <div>54</div>
  <div>55</div> 
  <div>56</div>
  <div>57</div>
  <div>58</div>  
   <div>59</div>
  <div>60</div> 
</div>
</div>  

  <div>
  
<h6>Attack on titan</h6>
The third season of the Attack on Titan anime television series was produced by IG Port's Wit Studio, chief directed by Tetsurō Araki and directed by Masashi Koizuka, with Yasuko Kobayashi handling series composition and Kyōji Asano providing character designs. It covers the "Uprising" (chapters 51–70) and "Return to Shiganshina" (chapters 71–90) arcs from the original manga by Hajime Isayama. The season's first 12 episodes were broadcast on NHK General TV from July 23 to October 15, 2018, before going into hiatus until April 29, 2019. Adult Swim began airing Funimation's English dub on August 18, 2018.

</div>

<div>
<h1>Action</h1>
  <div class="flex-containeraction">
  <br></br>
  <div><img src={aot} style={pics}/></div>
  <div><img src={naruto} style={pics}/></div>
  <div><img src={bleach} style={pics}/></div>  
  <div><img src={juj} style={pics}/></div>
  <div><img src={demon} style={pics}/></div>

</div></div>  
<div>
<h1>Action</h1>
<div class="flex-containeraction">
  <br></br>
  <div><img src={anime1} style={pics}/></div>
  <div><img src={anime2} style={pics}/></div>
  <div><img src={anime3} style={pics}/></div>  
  <div><img src={anime4} style={pics}/></div>
  <div><img src={anime5} style={pics}/></div>

</div>
</div>
<div>
<h1>Romantic</h1>
<div class="flex-containeraction">
  <br></br>
  <div><img src={anime6} style={pics}/></div>
  <div><img src={anime7} style={pics}/></div>
  <div><img src={anime8} style={pics}/></div>  
  <div><img src={anime9} style={pics}/></div>
  <div><img src={anime10} style={pics}/></div>

</div>
</div>
<div>
<h1>Sci-fi</h1>
<div class="flex-containeraction">
  <br></br>
  <div><img src={anime11} style={pics}/>
 </div>
  <div><img src={anime12} style={pics}/>
 </div>
  <div><img src={anime13} style={pics}/></div>  
  <div><img src={anime14} style={pics}/></div>
  <div><img src={anime15} style={pics}/></div>

</div>

</div>
<br></br>
<div>
<div class="flex-containeraction" >
<h2 class="footer">
  Copyrights - Haryshwa
</h2>
</div>
</div>
</div>
    </div>
   </div>
      </div>
     
      </div>
    );
  }
}
