import {CurrentPlayer} from "../types";
import styled from "@emotion/styled";

interface PlayerTurnProps {
  currentPlayer: CurrentPlayer;
}

const PlayerTurn = ({currentPlayer}: PlayerTurnProps) => {
  return (
    <Wrapper player={currentPlayer}>
      <Text>{`This is ${currentPlayer === "red" ? "BB" : "GGs"}'s turn`}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div<{player: CurrentPlayer}>`
  display: flex;
  flex-direction: column;
  background-color: ${({player}) => (player === "red" ? "rgb(229,6,30)" : "rgb(255,238,1)")};
  width: 250px;
  height: 120px;
  border: 0.5px solid white;
  border-radius: 24px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Text = styled.h4`
  text-align: center;
  font-weight: bolder;
  color: black;
`;

export default PlayerTurn;