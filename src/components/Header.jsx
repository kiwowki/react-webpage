import React from 'react'

const Header = ( props ) => {
    return (
        <header id="headerType" className={`header_wrap ${props.element}`}>
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">wolves <em>site</em></a>
                </div>
                <nav className="header_menu">
                    <ul>
                        <li><a href="/">헤더 영역</a></li>
                        <li><a href="/">슬라이드 영역</a></li>
                        <li><a href="/">배너 영역</a></li>
                        <li><a href="/">컨텐츠 영역</a></li>
                        <li><a href="/">푸터 영역</a></li>
                    </ul>
                </nav>
                <div className="header_member">
                    <a href="/">로그인</a>
                </div>
            </div>
        </header>
    )
}

export default Header