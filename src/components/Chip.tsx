import styled from "@emotion/styled";
import {Chip as ChipI, CurrentPlayer, OnChipClick} from "../types";
import RedChipSVG from "../assets/red.svg";
import YellowChipSVG from "../assets/yellow.svg";

interface ChipProps {
  chip: ChipI;
  currentPlayer: CurrentPlayer;
  onClick: OnChipClick;
}

const Chip = ({chip, currentPlayer, onClick}: ChipProps) => {
  const {value} = chip;

  let ChipSVG;
  if (value === "red") {
    ChipSVG = <img src={RedChipSVG} alt="Red Chip" />;
  } else if (value === "yellow") {
    ChipSVG = <img src={YellowChipSVG} alt="Yellow Chip" />;
  }

  return (
    <StyledChip
      currentPlayer={currentPlayer}
      value={value}
      onClick={() => onClick(chip, currentPlayer)}
    >
      {ChipSVG}
    </StyledChip>
  );
};

const StyledChip = styled.div<{ currentPlayer: CurrentPlayer }>`
  border: 0.5px solid white;
  border-radius: 50%;
  background-color: rgb(210,210,210); 
  width: 100%;
  max-width: 65px;
  height: 65px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    height: 60px; // Adjust as necessary
  }

  :hover {
    border: 3px solid
      ${({currentPlayer}) =>
        currentPlayer === "red"
          ? "rgb(229,6,30)"
          : "rgb(255,238,1)"};
    cursor: pointer;
  }
`;

export default Chip;


