import styled from 'styled-components';

export const Container = styled.div`
  width: 272px;
  height: 160px;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  padding: 19px 16px;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  img {
    width: 81px;
    height: 122px;

    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  }

  .bookInformation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 122px;

    div {
      h2 {
        font-size: 14px;
        font-weight: 500px;
        color: #333333;
      }

      h3 {
        font-size: 12px;
        font-weight: 400;
        color: #ab2680;
      }

      p {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
      }

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;
