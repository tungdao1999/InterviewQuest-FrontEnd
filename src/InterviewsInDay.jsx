import React from 'react';
import { List, Avatar } from 'antd';

const InterviewsInDay = ({ listInterviewInDay }) => {
  if (!listInterviewInDay?.length) {
    return null; // or some placeholder like <div>No interviews scheduled</div>
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={listInterviewInDay}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={
              <a href="https://ant.design">
                <span>{item.title}</span>
                <span style={{ marginLeft: '5px' }}>{item.time}</span>
              </a>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default InterviewsInDay;