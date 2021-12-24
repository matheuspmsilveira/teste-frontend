import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  width: 42rem;
  height: 31rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  img {
    width: 21.81rem;
    height: 31rem;

    filter: drop-shadow(0px 0.75rem 1.125rem rgba(0, 0, 0, 0.3));
  }

  .allBookInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 17.25rem;
    height: 10.62rem;

    .header {
      margin-bottom: 2rem;

      h1 {
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 2.5rem;
        color: #333333;
      }

      span {
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: #ab2680;
      }
    }

    .bookInfos {
      margin-bottom: 2rem;

      h2 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.75rem;

        color: #333333;
      }

      div {
        display: flex;
        justify-content: space-between;
        span {
          &:first-child {
            font-weight: 500;
            font-size: 0.75rem;
            line-height: 1.75rem;

            color: #333333;
          }

          &:last-child {
            font-size: 0.75rem;
            line-height: 1.25rem;
            text-align: right;

            color: #999999;
          }
        }
      }
    }

    .publisherDescription {
      h2 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.25rem;

        color: #333333;
      }

      p {
        img {
          width: 1.1rem;
          height: 0.88rem;
          opacity: 0.5;
        }

        font-size: 0.75rem;
        line-height: 1.25rem;

        color: #999999;
      }
    }
  }
`;
