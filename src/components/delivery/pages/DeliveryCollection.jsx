import { SentimentVeryDissatisfied } from '@mui/icons-material';
import React from 'react';
import classes from './DeliveryCollection.module.css';
export const DeliveryCollection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_container}>All Collection List</div>
      <div className={classes.body}>
        <div className={classes.body_title}>Collection List</div>
        <div className={classes.table_container}>
          <table className={classes.table_wrapper}>
            <tr key="1" className={classes.head_row}>
              <th className={classes.no}>#</th>
              <th className={classes.delivery_boy}>Delivery Boy</th>
              <th className={classes.amount}>Collected Amount</th>
              <th className={classes.at}>Created At</th>
            </tr>
            <tr key="2" className={classes.body_row}>
              <span>
                <SentimentVeryDissatisfied
                  style={{ color: 'gray', fontSize: '70px' }}
                />
              </span>
              <span>
                <h1>Nothing found!</h1>
              </span>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
