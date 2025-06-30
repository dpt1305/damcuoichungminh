'use client';
import { Button } from 'antd';

type Props = {
  address: string;
};

function ViewMapButton({ address }: Props) {
  const onViewMap = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <Button type="primary" className="w-full" onClick={onViewMap}>
      Xem bản đồ
    </Button>
  );
}

export default ViewMapButton;
