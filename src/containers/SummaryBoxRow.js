import React, { Component, PropTypes } from 'react';
import Box from '../components/Box';
import {Col} from 'react-bootstrap';

const SummaryBoxRow = (props) => {
  const {
    total,
    blocked,
    healthy,
    warning
  } = props;

  return (
    <Col md={12}>
    <Col md={2} />
    <Col md={2}>
      <Box className="SummaryBox Box--blue">
        <h2 className="SummaryBox-title">
          Total Apps
        </h2>

        <strong className="SummaryBox-value">
          {total}
        </strong>

      </Box>
      </Col>
<Col md={2}>
        <Box className="SummaryBox Box--red">
          <h2 className="SummaryBox-title">
            Blocked Apps
          </h2>

          <strong className="SummaryBox-value">
            {blocked}
          </strong>

        </Box>
</Col>
<Col md={2}>
        <Box className="SummaryBox Box--green">
          <h2 className="SummaryBox-title">
            Healthy Apps
          </h2>

          <strong className="SummaryBox-value">
            {healthy}
          </strong>
        </Box>
</Col>
<Col md={2}>
        <Box className="SummaryBox Box--orange">
          <h2 className="SummaryBox-title">
            Warning
          </h2>

          <strong className="SummaryBox-value">
            {warning}
          </strong>
        </Box>
        </Col>
      </Col>

  );
};

SummaryBoxRow.propTypes = {
  total: PropTypes.number,
  healthy: PropTypes.number,
  blocked: PropTypes.number,
  warning: PropTypes.number
};

export default SummaryBoxRow;
