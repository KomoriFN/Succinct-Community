const Hearts = () => {
  const hearts = Array(20).fill(0);
  
  return (
    <div className="decorative-hearts">
      {hearts.map((_, i) => (
        <div 
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default Hearts;