const Character = ({ data }) => {
  return (
    <div className="item">
      <img src={data.image} />
      <div className="backdrop">
        <h3>{data.name}</h3>
      </div>
    </div>
  );
};

export default Character;
