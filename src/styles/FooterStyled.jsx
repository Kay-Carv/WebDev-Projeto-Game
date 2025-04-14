import styled from "styled-components";

export const FooterContainer =styled.footer`

    background: #49f273;
    color:#012619;
    padding: 20px;
    margin-top:auto;
`
export const FooterContext =styled.div`
    display: flex;
    justify-content:space-around;
    max-width:1200px;
    margin: auto;

    h3{
        margin-bottom:10px;
        padding:0;
    }


    li{
        margin-bottom: 5px;
    }
    a {
        color: #012619;
        text-decoration:none;
        list-style:none;
    }
`