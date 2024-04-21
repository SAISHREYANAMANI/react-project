import { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        
        <div className="newPostCard">
           
          <div className="Post">
          <h2>FACE DETECTION USING FACE API.JS</h2>
      {/* <div class="image"><img src="https://user-images.githubusercontent.com/31125521/50575270-f501d080-0dfb-11e9-9676-8f419efdade4.png"/></div> */}
      <div class="image"><img src="https://dce0qyjkutl4h.cloudfront.net/wp-content/webp-express/webp-images/uploads/2023/07/emotion-recognition-using-Azure-Cognitive.png.webp"/></div>
       <div className="addPost">
        
            <div className="postForm">
              <label htmlFor="file"> GET STARTED</label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
            </div>
          </div>
          </div>
        <div class="post2">        
        </div>
        </div>
      )}
    </div>
  );
}

export default App;