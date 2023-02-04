import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const turnAdmin = this.usersRepository.findById(user_id);

    if (!turnAdmin) {
      throw new Error("User not found!");
    }

    const userAdmin = this.usersRepository.turnAdmin(turnAdmin);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
