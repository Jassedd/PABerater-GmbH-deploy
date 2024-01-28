import React from "react";
import "./feed-instagram.css";



function FeedInstagram() {
  return (
    <section className="instagramFeed_section">
      <h1 className="instagramFeed_section_Title">PABerater al día</h1>

<iframe className="instaFeed" 
src="https://www.instagram.com/paberater_/embed" 
width="90%" height="420" frameborder="0" scrolling="no" allowtransparency="true">
</iframe>
</section>
);
}


export default FeedInstagram;