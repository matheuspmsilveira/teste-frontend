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
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .headerTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 12.375rem;

      @media (max-width: 720px) {
        width: 15rem;
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

        width: auto;
      }

      button {
        background: transparent;
        border: transparent;
      }
    }
  }
`;
