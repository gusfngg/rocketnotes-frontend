import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
   grid-area: header;

   height: 105px;
   width: 100%;

   border-bottom: 2px solid ${({ theme }) =>  theme.COLORS.BACKGROUND_700};

   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 0px 80px;

   background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Profile = styled(Link)`
   display: flex;
   align-items: center;
   gap: 10px;

   > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
   }

   > div {
      display: flex;
      flex-direction: column;
      line-height: 24px;

      span {
         font-size: 14px;
         color:  ${({ theme }) =>  theme.COLORS.GRAY_100};
      }

      strong {
         font-size: 18px;
         color: ${({ theme }) =>  theme.COLORS.WHITE};
      }
   }
`

export const Logout = styled(Link)`
   border: none;
   background: none;

   > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
   }
`;