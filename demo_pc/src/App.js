import React from 'react';
import './assets/css/less.less'
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      {/* 123456 */}
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>
  );
}

export default App;
