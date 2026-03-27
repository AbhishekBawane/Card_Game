import { useEffect, useState } from "react";
import Board from "../components/Board";
import { generateCards, shuffle } from "../utils/gameLogic";
import Navbar from "../components/Navbar";
import { theme, inputCSS, buttonCSS } from "../theme";

export default function Game() {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);

  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  const [wallet, setWallet] = useState(1000);
  const [bet, setBet] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const [isChecking, setIsChecking] = useState(false); 

  useEffect(() => {
    const saved = localStorage.getItem("wallet");
    if (saved) setWallet(Number(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("wallet", wallet);
  }, [wallet]);

  function startGame() {
    if (bet <= 0 || bet > wallet || bet > 5000) {
      alert("Invalid bet");
      return;
    }

    setWallet(prev => prev - bet);

    const { row1, row2 } = generateCards();
    setRow1(row1);
    setRow2(row2);

    setMatched([]);
    setSelected([]);
    setGameStarted(true);
  }

  function handleClick(card, rowIndex) {
    if (selected.length === 2 || isChecking) return;

    if (selected.some(c => c.id === card.id)) return;

    if (selected.length === 1 && selected[0].rowIndex === rowIndex) return;

    if (matched.some(c => c.id === card.id)) return;

    setSelected(prev => [...prev, { ...card, rowIndex }]);
  }

  useEffect(() => {
    if (selected.length !== 2) return;

    setIsChecking(true);

    const [a, b] = selected;

    if (a.value === b.value && a.id !== b.id) {
      setMatched(prev => [...prev, a, b]);
    }

    setTimeout(() => {
      setSelected([]);

      setRow1(prev => shuffle(prev));
      setRow2(prev => shuffle(prev));

      setIsChecking(false); 
    }, 800); 
  }, [selected]);

  useEffect(() => {
    if (!gameStarted) return;

    if (selected.length > 0 || isChecking) return; 

    const interval = setInterval(() => {
      setRow1(prev => shuffle(prev));
      setRow2(prev => shuffle(prev));
    }, 7000); 

    return () => clearInterval(interval);
  }, [gameStarted, selected, isChecking]);

  useEffect(() => {
    if (!gameStarted) return;

    if (matched.length === 10) {
      const winAmount = bet * 3;
      setWallet(prev => prev + winAmount);
      alert(`You WON ₹${winAmount}`);
      setGameStarted(false);
    }
  }, [matched]);

  return (
    <div>
      <Navbar wallet={wallet} />

      {!gameStarted && (
        <div
          style={{
            width: "100%",
            backgroundColor: theme.palette.secondary.main,
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "50px",
            paddingTop: "15px",
            paddingBottom: "5px",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.primary.contrastText
          }}
        >
          <input
            type="number"
            style={inputCSS(theme)}
            placeholder="Enter Bet"
            onChange={(e) => setBet(Number(e.target.value))}
          />

          <button style={buttonCSS(theme)} onClick={startGame}>
            Start Game
          </button>
        </div>
      )}

      {gameStarted && (
        <Board
          row1={row1}
          row2={row2}
          selected={selected}
          matched={matched}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}