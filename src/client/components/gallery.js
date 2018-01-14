import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  { src: "/assets/18557410_1464219270265080_2683031297162435714_n.jpg", width: 960, height: 640 },
  { src: "/assets/18698016_1469973053023035_1556575143539679152_n.jpg", width: 960, height: 640 },
  { src: "/assets/18698526_1469972186356455_3393573135673060264_n.jpg", width: 960, height: 640 },
  { src: "/assets/18739740_1469980449688962_6610982510698125336_n.jpg", width: 960, height: 640 },
  { src: "/assets/18740809_1469972003023140_6159934801412263190_n.jpg", width: 960, height: 640 },
  { src: "/assets/18765698_1469972719689735_8294837882728339668_n.jpg", width: 960, height: 640 },
];

export default class TheGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
