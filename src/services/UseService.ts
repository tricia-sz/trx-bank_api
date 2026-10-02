type User = {
  name: string;
  email: string;
};

const db: User[] = [
  {
    name: "Luiz",
    email: "luiz@trxbank.com",
  },
];

export class UserService {
  createUser = (name: string, email: string) => {
    const user: User = {
      name,
      email,
    };

    db.push(user);

    console.log("DB atualizado");

    return user;
  };

  getAllUsers = () => {
    return db;
  };
}