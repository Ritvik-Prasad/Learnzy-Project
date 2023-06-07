import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { WordleContext } from "../Wordle";
import { tokens } from "../../../theme";
import { useTheme } from "@emotion/react";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(WordleContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // <div className="letter" id={letterState}>
    //   {letter}
    // </div>
    <Box
      color={colors.grey[100]}
      id={letterState}
      sx={{
        flex: "33%",
        height: "100%",
        border: "1px solid grey",
        margin: "5px",
        display: "grid",
        placeItems: "center",
        fontSize: "30px",
        fontWeight: "bolder",
        // color: {colors.primary[100]},
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {letter}
    </Box>
  );
}

export default Letter;
