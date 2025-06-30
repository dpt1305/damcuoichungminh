'use client';
import { Button } from 'antd';

type Props = {
  eventName: string;
  dateTime: string;
  address: string;
};

function AddToCalendarButton({ eventName, dateTime, address }: Props) {
  const onAddToCalendar = () => {
    const date = new Date(dateTime);
    const formattedDate = date.toISOString().replace(/-|:|\.\d{3}/g, '');
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${formattedDate}/${formattedDate}&details=${encodeURIComponent('Sự kiện đám cưới của Phú Tùng & Quỳnh Anh')}&location=${encodeURIComponent(address)}&sf=true&output=xml`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Button type="primary" className="w-full" onClick={onAddToCalendar}>
      Thêm vào lịch
    </Button>
  );
}

export default AddToCalendarButton;
