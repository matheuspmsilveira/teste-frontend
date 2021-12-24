import styled from 'styled-components';

export const Container = styled.button`
  width: 17rem;
  height: 10rem;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  padding: 1.19rem 1rem;

  background: #ffffff;
  box-shadow: 0px 0.375rem 1.5rem rgba(84, 16, 95, 0.13);
  border-radius: 0.25rem;

  @media (max-width: 720px) {
    width: 35.71rem;
  }

  img {
    width: 5rem;
    height: 7.625rem;

    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  }

  .bookInformation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;

    height: 7.625rem;

    div {
      h2 {
        font-size: 0.875rem;
        font-weight: 31.25rem;
        color: #333333;
      }

      h3 {
        font-size: 0.75rem;
        font-weight: 400;
        color: #ab2680;
      }

      p {
        font-size: 0.75rem;
        font-weight: 400;
        color: #999999;
      }

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;
