import React from 'react'

const Slider = ( props ) => {
    return (
        <section id="sliderType" className={`slider_wrap ${props.element}`}>
            <h2 className="blind">슬라이드 유형</h2>
            <div className="slider_inner">
                <div className="slider">
                    <div className="slider_img">
                        <div className="desc">
                            <span>developer</span>
                            <h3>New Frontend</h3>
                            <p>
                                너무 무리하지 말아요! 이미 당신은 잘 하고 있어요!!<br />
                                앞으로도 잘 할 수 있어요!!!
                            </p>
                            <div className="btn">
                                <a href="/">자세히 보기</a>
                                <a href="/" className="black">사이트 보기</a>
                            </div>
                        </div>
                    </div>
                    <div className="slider_arrow">
                        <a href="/" className="left"><span className="ir">이전 이미지</span></a>
                        <a href="/" className="right"><span className="ir">다음 이미지</span></a>
                    </div>
                    <div className="slider_dot">
                        <a href="/" className="dot active"><span className="ir">1</span></a>
                        <a href="/" className="dot"><span className="ir">2</span></a>
                        <a href="/" className="dot"><span className="ir">3</span></a>
                        <a href="/" className="play"><span className="ir">플레이</span></a>
                        <a href="/" className="stop"><span className="ir">정지</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider