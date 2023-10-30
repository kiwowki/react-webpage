import React from 'react'

const textInfo = [
    {
        title: "검색 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다",
        src: "/"
    },
    {
        title: "퀴즈 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다",
        src: "/"
    },
    {
        title: "마우스 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다",
        src: "/"
    },
    {
        title: "슬라이드 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다",
        src: "/"
    },
    {
        title: "패럴랙스 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다",
        src: "/"
    },
    {
        title: "게임 이펙트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다. 메서드를 통해 쉽게 검색을 만들 수 있습니다",
        src: "/"
    },
]

const Text = (props) => {
    return (
        <section id="textType" className={`text_wrap ${props.element}`}>
            <span>{props.title}</span>
            <h2>스크립트를 익히는 방법</h2>
            <div className="text_inner container">
                {textInfo.map((text, key) => (
                    <div className={`text t${key+1}`} key={key}>
                        <h3 className="text_title">{text.title}</h3>
                        <p className="text_desc">{text.desc}</p>
                        <a className="text_btn" href={text.src}>더보기</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Text