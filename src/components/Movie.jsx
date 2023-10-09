import React from "react";
import {useState} from "react";
// state기능 활성화

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
// poster_path 값이 전체경로가 아니라 앞부분 경로를 이렇게 변수로 미리 등록한다

export default function Movie({title, poster_path, vote_average, overview}){
    const [_style, setStyle] = useState({display: 'none'})
    // state 내용과 초기값
    return (
        <div
        onMouseEnter={e => {
            setStyle({display: 'block'})
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}
        // state 입력값(onMouse함수)에 따른 출력결과(display속성값)
        >
            <div className="movie-container">
                <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
                <div className="movie-info">
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </div>
            </div>
            <div className="movie-detail" style={_style}>
                <div className="movie-story">
                    <h4>{title}</h4>
                    <span>{overview}</span>
                </div>
            </div>
        </div>
    ) 
    // movie-container영역에서 이미지+제목+평점 순으로 자료를 나열한다
    // movie-detail영역에서 제목+설명 순으로 자료를 나열한다
    // movie-detail의 style값을 위 state의 _style 변수로 지정
}