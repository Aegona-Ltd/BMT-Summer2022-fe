import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { realtimeDB as db } from "../../todoList/connectFireBase/config";
import styles from '../../../styles/components/Contact/List_contact.module.scss'

function ListContact() {
  const ref = db.ref("CONTACT");
  const [values, setValue] = useState([]);
  useEffect(() => {
    ref.on('value', function (snapshot) {
      setValue(snapshot.val())
    });
  }, []);
  return (
    <div>
      <div
        id="scrollableDiv"
        style={{
          width: "50%",
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}>
        {values && values.map((item, key) => {
          return (
            <div key={key} className={styles.list_bg}>
              <div className={styles.Avatar}>
                <Avatar src="https://joeschmoe.io/api/v1/random">
                </Avatar>
              </div>
              <div className={styles.full_text}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.text}>{item.introduction}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListContact;