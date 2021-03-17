import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Link = styled.a`
    color: rgb(249, 249, 249);
    opacity: 1;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.53;
    margin: 0px;
    text-align: center;
    text-decoration: none;
    width: auto;
`;

export const Header = styled.header`
    width: 100vw;
`;

export const Logo = styled.img`
    width: 205px;
    margin-top: 25px;
    margin-bottom: 15px;
`;

export const LoginMain = styled.main`
    h2 {
        font-size: 24px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
    }
`;

export const Form = styled.form`
    width: 24vw;
`;

export const EmailInput = styled.input`
    backdrop-filter: blur(50px);
    background-color: rgb(49, 52, 62);
    border: 1px solid transparent;
    border-radius: 4px;
    caret-color: rgb(2, 231, 245);
    color: rgb(249, 249, 249);
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    height: 48px;
    letter-spacing: normal;
    line-height: 1.53;
    margin: 24px 0px 34px 0px;
    outline: none;
    padding: 7px 12px;
    transition: all 0.1s ease 0s;
    width: 100%;
`;

export const SubmitButton = styled.button`
    background: rgb(0, 114, 210);
    border: none;
    border-radius: 4px;
    color: rgb(249, 249, 249);
    font-size: 15px;
    padding: 0px 24px;
    text-transform: uppercase;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: Avenir-Heavy, sans-serif;
    font-stretch: normal;
    font-style: normal;
    height: 48px;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin: 0px;
    overflow: hidden;
    text-align: center;
    transition: all 0.2s ease-in-out 0s;
    width: 100%;
    margin: 24px 0px 0px 0px;
    -webkit-font-smoothing: antialiased;
    opacity: 1;
    visibility: visible;
`;

export const Join = styled.div`
    margin-top: 24px;

    :first-child {
        margin-top: 34px;
        color: rgb(202, 202, 202);
        display: inline-block;
        font-size: 15px;
        font-stretch: normal;
        font-style: normal;
        font-weight: normal;
        letter-spacing: normal;
        line-height: 1.53;
        padding-right: 4px;
    }
`;

/* export const JoinLeftText = styled.div`
`; */
