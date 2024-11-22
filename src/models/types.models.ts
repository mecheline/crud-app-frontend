export type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type LoginProps = {
  email: string;
  password: string;
};

export type LoggedInUserProps = {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};
