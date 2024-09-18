import React, { useEffect, useState } from 'react';
import { Badge, Calendar, Avatar, List } from 'antd';
import api from './api/api';
import InterviewsInDay from './InterviewsInDay';
import ListInterviewModal from './ListInterviewModal';

const MyCalendar = () => {
  // List of cells
  const [listCalendarInterview, setListCalendarInterview] = useState([]);
  const [searchCondition, setSearchCondition] = useState({ Year: new Date().getFullYear(), Month: new Date().getMonth() + 1});
  const [showAddInterviewModal, setShowAddInterviewModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchCalendarInterviews = async () => {
      const calendarInterviews = await api.postApiData('Interview/getCalendar', searchCondition);
      setListCalendarInterview(calendarInterviews);
    };

    fetchCalendarInterviews();
  }, [searchCondition]);

  const getListData = (value) => {
    let listData = [];

    // Fetch calendar data to get interviews
    let calendarItem = listCalendarInterview?.find((item) => item.dayInMonth === value.date() && item.month === value.month() + 1);
    
    if (calendarItem?.interviews) {
      listData = calendarItem.interviews.map((interview) => {
        return {
          title: interview.title,
          time: interview.time,
          index: 1
        };
      });
    }

    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const panelChange = (date, mode) => {
    // You can implement your own data fetching here.
    if (mode === 'month') {
      let year = date.year();
      let month = date.month() + 1;

      setSearchCondition({ Year: year, Month: month })
    }
    else if (mode === 'year') {

    }
    else { }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listInterviewInDay = getListData(value);
    return (
      <ul className="events">
        <InterviewsInDay listInterviewInDay ={listInterviewInDay}  />
      </ul>
    );
  };
  const onSelect = (date, info) => {
    setSelectedDate(date);
    setShowAddInterviewModal(true);
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onCloseAdd = () => {
    setShowAddInterviewModal(false);
  };
  
  return <>
          <ListInterviewModal visible={showAddInterviewModal} onClose={onCloseAdd}/>
          <Calendar onPanelChange={panelChange} onSelect={onSelect} cellRender={cellRender} />
         </>;
};
export default MyCalendar;