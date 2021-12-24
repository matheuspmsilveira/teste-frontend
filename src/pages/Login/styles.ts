import styled from 'styled-components';
import backgroundImage from '../../assets/background-image.png';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;

  position: relative;

  padding-left: 7.19rem;

  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    background-position: -341px;
  }

  .error {
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

    position: absolute;
    width: 15rem;
    height: 3rem;
    left: 7.19rem;
    top: 33rem;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(0.125rem);

    border-radius: 0.25rem;

    @media (min-width: 1080px) {
      left: 7.19rem;
      top: 30rem;
    }

    @media (min-width: 1400px) {
      left: 7.19rem;
      top: 38rem;
    }

    &:before {
      content: ' ';
      position: absolute;
      bottom: 100%;
      left: 10%;
      margin-left: -0.312rem;
      border-width: 0.5rem;
      border-style: solid;
      border-color: rgba(255, 255, 255, 0.4) transparent transparent transparent;
      backdrop-filter: blur(2px);
      transform: rotate(180deg);
    }
  }

  img {
    margin-bottom: 3.125rem;
  }

  form {
    label {
      display: flex;
      justify-content: space-between;

      padding: 0.5rem 1rem 8px 1rem;

      width: 23rem;
      height: 3.75rem;
      margin-bottom: 1rem;

      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(0.125rem);

      border-radius: 0.25rem;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.5rem;

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
        width: 5.31rem;
        height: 2.25rem;
        margin-top: 0.25rem;

        background: #ffffff;
        border-radius: 2.75rem;

        border: 0;

        font-size: 1rem;
        font-weight: 500;
        color: #b22e6f;
      }
    }
  }
`;
