import React from "react";
import { Col } from "reactstrap";
import styles from "../../styles/Schedule.module.css";

interface ScheduleTimeProps {
  initialTime?: string;
  endTime?: string;
}

const ScheduleTime: React.FC<ScheduleTimeProps> = (props) => {
  return (
    <Col
      xxl={1}
      sm={12}
      className={`${styles.timeRow} d-xxl-grid justify-content-sm-start justify-content-xxl-end`}
    >
      <span>{props.initialTime}</span>
      <span className={`${styles.timeSeparator} d-xxl-none d-sm-block`}>-</span>
      <span className={styles.opacity}>{props.endTime}</span>
    </Col>
  );
};

export default ScheduleTime;
