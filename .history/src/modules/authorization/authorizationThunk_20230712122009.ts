import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISignIn, IUser } from '../../api/dto/IAuthorization';

export const signIn = createAsyncThunk('signin', async (body: ISignIn) => {
  const res = await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlcjIiLCJ0ZW5hbnQiOiIyNSIsIm5iZiI6MTY4OTA4MTg2MywiZXhwIjoxNjg5MTY4MjYzLCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.4QP_HizCV3eZI0UAw0FhgF3IWm_KtFNcxf0lfzCDW0s',
      'Content-Type': 'application/json',
    },
  });
  return (await res.json()) as IUser;
});
