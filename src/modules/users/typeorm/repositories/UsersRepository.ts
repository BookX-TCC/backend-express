import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByNome(nome: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        nome,
      },
    });

    return user;
  }

  public async findBySobrenome(sobrenome: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        sobrenome,
      },
    });

    return user;
  }

  public async findById(id: number): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export default UsersRepository;
