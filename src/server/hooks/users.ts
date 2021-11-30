import { api } from '../api';
import { useQuery } from 'react-query';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data } = await api.get('/users', {
    params: {
      page,
    },
  });

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(),
    };
  });

  return users;
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
  });
}
