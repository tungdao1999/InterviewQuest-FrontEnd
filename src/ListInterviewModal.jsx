import { React } from 'react';
import { Space, Table, Modal } from 'antd';
const { Column, ColumnGroup } = Table;
import { useState, useEffect } from 'react';

const ListInterviewModal = ({ visible, onClose }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData([
      {
        key: '1',
        company_name: 'Random name 1',
        title: 'Cha bietnua 1',
        address: "123 Main St",
        phone_number: '0132321321',
      },
      {
        key: '2',
        company_name: 'Random name 1',
        title: 'Cha bietnua 2',
        address: "123 Main St",
        phone_number: '9991212',
      },
    ]);
  }, []);
  return (
    <Modal
        title="List Interview"
        open={visible}
        onCancel={onClose}
      >
       
        <Table dataSource={data}>
          <Column title="Company Name" dataIndex="company_name" key="company_name"  />
          <Column title="Title" dataIndex="title" key="title" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column title="Phone Number" dataIndex="phone_number" key="phone_number" />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
            <Space size="middle">
               <a>Watch</a>
               <a>Delete</a>
            </Space>
          )}/>
       </Table> 
    </Modal>
  )
};

export default ListInterviewModal;
