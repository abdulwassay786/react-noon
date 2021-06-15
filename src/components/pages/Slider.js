import React from 'react'

function Slider() {
    return (
        <div className='card-body'>
        <div  id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://k.nooncdn.com/cms/pages/20210615/b62e3ab08f234a38a8402cc57a5affa4/en_slider-01-5DAYS.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://k.nooncdn.com/cms/pages/20210614/686de682605c6753366569a273c7fc3a/en_slider-01.gif" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}
export default Slider;