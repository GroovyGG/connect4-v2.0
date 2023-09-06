import styled from "@emotion/styled";
import Chip from "./Chip";
import {Chip as ChipI, CurrentPlayer, OnChipClick} from "../types";

interface BoardProps {
  board: ChipI[];
  onChipClick: OnChipClick;
  currentPlayer: CurrentPlayer;
}

const Board = ({board, currentPlayer, onChipClick}: BoardProps) => {
  return (
    <GridWrapper>
      {board.map((cell, i) => (
        <Chip key={i} chip={cell} onClick={onChipClick} currentPlayer={currentPlayer} />
      ))}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 70px);
  justify-items: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(8,29,221,1) 0%, rgba(51,155,248,1)95%);
  border: 0.5px solid white;
  border-radius: 36px;
  width: 100%;
  max-width: 650px;
  padding: 10px 10px 40px 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 16px 32px, rgba(0, 0, 0, 0.28) 0px 12px 12px;
  }
`;

export default Board;