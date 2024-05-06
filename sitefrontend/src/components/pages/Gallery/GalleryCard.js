import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { getPageContent } from "../../../content/siteContent";

import "./GalleryCard.css";

const GalleryCard = () => {
  const { imageList } = getPageContent("gallery");
  return (
    <div className="grids container py-5">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {imageList?.map((imageSrc, idx) => {
          return (
            <a key={`kwgcGallery-${idx}`} href={imageSrc}>
              <img alt="" className='rounded mx-auto img-fluid' src={imageSrc} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default GalleryCard;
