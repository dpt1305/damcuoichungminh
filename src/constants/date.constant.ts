import dayjs from 'dayjs';

export enum DateFormat {
  MMM_DD_YYYY = 'MMM DD, YYYY',
  MMM_DD_YYYY_HH_MM_SS_A = 'MMM DD, YYYY hh:mm:ss A',
}

export const WEDDING_EVENTS = [
  {
    id: 1,
    title: 'TIỆC CƯỚI NHÀ TRAI',
    time: '17:00 19/07/2025 (tức ngày 25 tháng 6 âm lịch)',
    dateTime: '2025-07-19T17:00',
    address: 'Nhà văn hoá số 2, thôn Giang Xá, thị trấn Trạm Trôi, Hoài Đức, Hà Nội',
  },
  {
    id: 2,
    title: 'TIỆC CƯỚI NHÀ GÁI',
    time: '17:00 19/07/2025 (tức ngày 25 tháng 6 âm lịch)',
    dateTime: '2025-07-19T17:00',
    address: 'Nhà văn hoá, thôn Lai Xá, Kim Chung, Hoài Đức, Hà Nội',
  },
];

export const WEDDING_DATE = dayjs('2025-07-20');
