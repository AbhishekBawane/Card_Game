import Card from "./Card";

export default function Board({
  row1,
  row2,
  selected,
  matched,
  handleClick
}) {
  function isFlipped(card) {
    return (
      selected.some(c =>c.id === card.id)||
      matched.some(c => c.id === card.id)
    );
  }
console.log("Row1:", row1)
  return (
    <div style={{width:'100%', marginTop:'90px'}}>
      {[row1, row2].map((row, rowIndex) => (
        <div className="row" style={{width:'90%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'50px' }} key={rowIndex}>
          {row.map((card) => (
            <Card
              key={card.id}
              value={card.value}
              isFlipped={isFlipped(card)}
              onClick={() => handleClick(card, rowIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}