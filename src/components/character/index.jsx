import PropTypes from 'prop-types';

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

Character.propTypes = {
  data: PropTypes.object,
};

export default Character;
