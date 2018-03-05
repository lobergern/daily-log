import React from 'react';
import PropTypes from 'prop-types';

const Table = ({headerRow, bodyRows, selectable}) => {
  let classList = 'mdl-data-table mdl-js-data-table mdl-shadow--2dp';

  if (selectable) {
    classList += ' mdl-data-table--selectable';
  }

  const selectableHeaderRow = React.cloneElement(headerRow, {selectable});
  const selectableBodyRows = mapSelectableRows(bodyRows, selectable);

  return (
    <table className={classList}>
      <thead>
        {selectableHeaderRow}
      </thead>
      <tbody>
        {selectableBodyRows}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  headerRow: PropTypes.node.isRequired,
  bodyRows: PropTypes.array.isRequired,
  selectable: PropTypes.bool
};

function mapSelectableRows(rows, selectable) {
  return React.Children.map(rows, row => {
    return React.cloneElement(row, {selectable});
  });
}

export default Table;
