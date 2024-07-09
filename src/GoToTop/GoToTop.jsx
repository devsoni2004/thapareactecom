import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { useEffect, useState } from "react";

const GoToTop = () => {
    const [isVisible, SetIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            SetIsVisible(true);
        } else {
            SetIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        // 👇️ remove the event listener 
        return () => { window.removeEventListener('scroll', listenToScroll); }
    }, []);
    return (
        <Wrapper>
            {isVisible && (
                <div className=" top-btn" onClick={goToBtn}>
                    <FaArrowUp className='upthin' />
                </div>
            )}
        </Wrapper>
    )
}
const Wrapper = styled.section`
display: flex;
justify-content:center;
align-items:center;
svg.upthin {
    position: absolute;
    top: 15px;
    left: 15px;
}
.top-btn {
    cursor: pointer;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 60px;
    position: fixed;
    z-index: 999;
    border-radius: 40px;
    background: black;
    width: 60px;
    height: 60px;
    bottom: 60px;
    right: 10px;
    position: fixed;
    display:flex
    cursor:pointer;
    .upthin{
        animation:gototop 1.2s linear alternate-reverse;
    }
    @keyframes gototop {
      0%{
          transform: translateY(-0.5rem);
        }
      100%{
           transform: translateY(1rem);
          }
    }
} 
`;
export default GoToTop