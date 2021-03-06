import styled from "styled-components";

export const TopStatsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: Ubuntu;
`

export const TopStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 15px;
  line-height: 50px;
  width: 150px;
  height: 150px;
  text-align: center;
  position: relative;
  box-shadow: 5px 5px 5px gray;
  font-size: 1.5rem;
  border-radius: 50%;
  color: #1976d2;
  border: 0.5px solid gray;
  opacity: 80%;
  //background: rgba(229, 229, 229, 0.8);
`;