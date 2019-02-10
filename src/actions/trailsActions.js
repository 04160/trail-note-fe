import { FETCH_TRAIL, FETCH_TRAILS } from './types';

export const fetchTrails = () => dispatch => {
  console.log({FETCH_TRAILS});
  let payload = [
    {
      name: 'Name 1',
      description: 'Short description, short description. Ding dong dooo',
      author: 'Author 111'
    },
    {
      name: 'Name 2',
      description: 'Short description 2, shhhhororooror. Ding dong dooo',
      author: 'Author 222'
    },
    {
      name: 'Name 3',
      description: '3333 333333 dedesd, shhhhororooror. Ding dong dooo',
      author: 'Author 333'
    }
  ];
  dispatch({
    type: FETCH_TRAILS,
    payload: payload
  })
};

export const fetchTrail = () => dispatch => {
  console.log({FETCH_TRAIL});
  let payload = {
    name: 'Name 1',
    description: 'Description 123. Qwerty 456',
  };
  dispatch({
    type: FETCH_TRAIL,
    payload: payload
  });
}
