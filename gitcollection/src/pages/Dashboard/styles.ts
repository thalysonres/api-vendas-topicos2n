import styled from "styled-components"

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`

export const Formulario = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    display: block;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border-right: 0;
  }
  button {
    width: 160px; 
    background-color: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
  }
`
export const Repo = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 16px;
    
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px 0 0;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`
