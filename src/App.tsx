import React from 'react';
import './App.css';
import Rectangle from './components/rectangle';

function App() {
  return (
    <div className="App">
      <svg>
        <foreignObject width={90} height={40} x={10} y={40}>
          <div className='content' onClick={() => { alert(1) }}>
            1
          </div>
        </foreignObject>
        <foreignObject width={90} height={40} x={190} y={10}>
          <div className='content' onClick={() => { alert(1) }}>
            10
          </div>
        </foreignObject>
        <foreignObject width={90} height={40} x={190} y={70}>
          <div className='content' onClick={() => { alert(1) }}>
            11
          </div>
        </foreignObject>
        <path d="M 100 60 L 200 30" stroke="black" fill="none"/>
        <path d="M 100 60 C 140, 30, 140, 30, 200 30" stroke="black" fill="none"/>
      </svg>

    </div>
  );
}

export default App;
