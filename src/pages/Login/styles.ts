import styled from 'styled-components';
import backgroundImage from '../../assets/background-image.png';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;

  position: relative;

  padding-left: 115px;

  display: flex;
  align-items: center;

  .error {
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

    position: absolute;
    width: 239px;
    height: 48px;
    left: 8%;
    top: 65%;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);

    border-radius: 4px;

    &:before {
      content: ' ';
      position: absolute;
      bottom: 100%;
      left: 10%;
      margin-left: -5px;
      border-width: 0.5rem;
      border-style: solid;
      border-color: rgba(255, 255, 255, 0.4) transparent transparent transparent;
      backdrop-filter: blur(2px);
      transform: rotate(180deg);
    }
  }

  img {
    margin-bottom: 50px;
  }

  form {
    label {
      display: flex;
      justify-content: space-between;

      padding: 8px 16px 8px 16px;

      width: 368px;
      height: 60px;
      margin-bottom: 16px;

      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(2px);

      border-radius: 4px;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 24px;

        p {
          font-size: 0.75rem;
          color: #ffffff;
          opacity: 0.5;
        }

        input {
          background: 0;
          border: 0;
          color: #ffffff;
          font-size: 1rem;

          &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
          }
        }
      }

      button {
        width: 85px;
        height: 36px;
        margin-top: 4px;

        background: #ffffff;
        border-radius: 44px;

        border: 0;

        font-size: 1rem;
        font-weight: 500;
        color: #b22e6f;
      }
    }
  }
`;
