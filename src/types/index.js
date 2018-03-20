// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, number, string, object } = PropTypes;

export const event = shape({
  id: PropTypes.oneOf[number, string],
  name: string,
  time: object,
  notes: string
});
