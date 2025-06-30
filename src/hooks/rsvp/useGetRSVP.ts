import { QueryKey } from '@/constants/query.constant';
import { getRsvp } from '@/services/rsvp';
import { useQuery } from '@tanstack/react-query';

export const useGetRSVP = () => {
  return useQuery({
    queryKey: [QueryKey.RSVP],
    queryFn: getRsvp,
  });
};
