import styled from 'styled-components';
import backgroundImage from '../../assets/home-1-background.png';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-blend-mode: darken;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  top: 100vh;

  padding: 2.625rem 9.58rem;

  @media (max-width: 720px) {
    padding: 1rem 2.635rem;
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 1152px;

    .headerTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 12.375rem;

      @media (max-width: 720px) {
        width: 50rem;
        margin-right: 15rem;
      }
    }

    .welcome {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15.625rem;

      @media (max-width: 720px) {
        p {
          display: none;
        }
      }

      button {
        background: transparent;
        border: transparent;
      }
    }

    @media (max-width: 720px) {
      width: 100%;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 1152px;
    margin-top: 1.625rem;

    button {
      margin-top: 1rem;
      border: transparent;

      &:focus {
        box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
        border: 0 none;
        outline: 0;
      }
    }

    @media (max-width: 720px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      width: 100%;
      margin-top: 1.625rem;
    }
  }

  section {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 1152px;
    margin-top: 1.5rem;

    p {
      margin-right: 1rem;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;

      color: #333333;
    }

    button {
      &:first-child {
        margin-right: 0.5rem;
      }

      background: transparent;
      border: transparent;

      .backButton {
        transform: rotate(180deg);
      }
    }

    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;
