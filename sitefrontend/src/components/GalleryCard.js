import "./GalleryCard.css";



const GalleryCard = () => {
  return (
    <div class="slider">
          <div class="list">
          <div class="item">
                <img src="images/saraswatipuja2018.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="images/durgapuja2018.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="images/durgapuja2017.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="images/gardenparty2017.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="images/durgapuja2016.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="images/durgapuja2015.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="images/durgapuja2014.jpg" alt=""/>
            </div>
        </div>
        <div class="buttons">
            <button id="prev" ></button>
            <button id="next"></button>
        </div>
        <ul class="dots">
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    
  )
}

export default GalleryCard;