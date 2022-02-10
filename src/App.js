import logo from './logo.svg';
import './App.css';
import GTP from './image/GTP.png'
import { ButtonHTMLAttributes } from 'react';


function App() {
  return (
    <>
      <div class="flex-container">
        <li><img src={GTP} className="Header-image"></img></li>
        <li><b><label>GTP.js</label></b></li>
      </div>

      <div className="Banner">
        <div><img src={GTP} className="Banner-image"></img></div>
        <div><b><label className="title">GTP.js</label></b></div>
        <div><label>Global Tech Platform Javascript Team</label></div>
        <div> <button className="button1">Get Started</button></div>

      </div>

      <div className="Description">
        <div>
          <h3>Get started in seconds</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
        </div>
        <div><h3>Demystified walmart infra</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p></div>
        <div><h3>Flexible and Extensible</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
        </div>
      </div>
      <div className="Footer">
        <label> Made for Walmart. Copyright Ⓒ 2022</label>

      </div>

    </>
  );
}

export default App;





