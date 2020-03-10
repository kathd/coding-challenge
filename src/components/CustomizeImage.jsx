import React, { useState } from "react";
import "../styles/customize-image.css";

const CustomizeImage = () => {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(0);

  const sizeChange = e => {
    setSize(+e.target.value);
  };

  const urlChange = e => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex-column page customize-image">
      <label htmlFor="image-url">Customize Image</label>
      <input
        type="text"
        id="image-url"
        name="image-url"
        placeholder="Enter URL"
        value={url}
        onChange={urlChange}
      />
      <input
        type="range"
        name="sizeSlider"
        min={0}
        max={200}
        value={size}
        onChange={sizeChange}
      />
      <div>
        <p>
          {size} x {size} px
        </p>
      </div>
      <div className="img-wrapper">
        {url ? (
          <img src={url} width={size} height={size} alt="img" />
        ) : (
          <p>No image</p>
        )}
      </div>
    </div>
  );
};

export default CustomizeImage;
