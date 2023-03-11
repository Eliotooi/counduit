export interface SignInInDTO {
  user: User;
}

interface User {
  email: string;
  token: string;
  urename: string;
  bio: string;
  image: string;
}