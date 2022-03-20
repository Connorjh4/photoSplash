import { useState, useEffect } from "react";
import pexelService from './service/pexels'

const App = () => {
  const [imgs, setImgs] = useState([])

  useEffect(() => {
    pexelService
      .getAll()
      .then( res => {
        setImgs(res)
      })
  }, [])

  console.log(imgs)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
