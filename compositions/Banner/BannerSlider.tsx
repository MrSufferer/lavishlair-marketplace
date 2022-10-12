import React from 'react';
import { default as _Carousel } from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/src/index'
import { default as _ReactPlayer } from 'react-player';
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
const Carousel = _Carousel as unknown as React.FC<CarouselProps>;

export function BannerSlider() {
    const [banners, setBanners] = React.useState([]);
    React.useEffect(() => {
      fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/banners").then(r => r.json()).then(r => {
        setBanners(r);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div style={{ paddingTop: 20 }}>

        {banners.length > 0 ? 
          <div className="relative">
            <Carousel style={{height:485}} autoPlay={false} interval={5000} animation={"slide"} reverseEdgeAnimationDirection={false} indicators={false} navButtonsAlwaysVisible={true}>
                {
                  banners.map( (item, i) => {
                    if (item.video) {
                      return (<a key={i} href={item.link}><ReactPlayer style={{borderRadius:30}} width={1200} height={484}   playing={true} url='/bch-entrepot.mp4' /></a>)
                    } else if (item.link) {
                      return (<a key={i} href={item.link}><div style={{borderRadius:30, height:485, background: "url('"+item.image+"') center center / cover no-repeat"}}></div></a>)
                    } else {
                      return (<div key={i} style={{borderRadius:30, height:485, background: "url('"+item.image+"') center center / cover no-repeat"}}></div>)
                    };
                  })
                }
            </Carousel>
          </div>
          : ""}


      </div>

    )
  }