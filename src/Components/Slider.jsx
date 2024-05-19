const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.pinimg.com/474x/cb/3c/60/cb3c60490c46c63bdf16659bb19ba5fa.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <img src="https://cdn.shopify.com/s/files/1/1186/0576/files/Pics-for-CeramicTemplate-01.jpg?v=1486719916" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <img src="https://images-cdn.ubuy.co.in/643036ae837601387535abd3-newqz-ceramic-vases-set-of-3-for-home.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
            <img src="https://cdn.britannica.com/41/163441-050-F63494BF/terra-cotta-pots-vessels-Cyprus.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            </div>
        </div>
    );
};

export default Slider;