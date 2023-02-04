import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const checkAdmin = this.usersRepository.findById(user_id);

    if (checkAdmin.admin !== true) {
      throw new Error("This user is not admin!");
    }
    
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
