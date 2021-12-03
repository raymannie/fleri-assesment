import React from "react";
// import PropTypes from "prop-types";
import sprite from "../../assets/images/icon-sprite.svg";

const Icon = ({ id, height, width, ...props }) => {
  return (
    <svg width={width} height={height} {...props}>
      <use xlinkHref={sprite + `#${id}`} />
    </svg>
  );
}

// Icon.propTypes = {
//   id: PropTypes.string.isRequired,
//   height: PropTypes.number,
//   width: PropTypes.number,
//   // type: PropTypes.oneOf(['text', 'password', 'number', 'tel']).isRequired,
//   // size: PropTypes.oneOf(['small', 'medium', 'large']),
//   // onChange: PropTypes.func,
//   // onKeyDown: PropTypes.func,
// };

export default Icon;
