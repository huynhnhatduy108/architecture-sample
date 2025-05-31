import { Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { Email } from '../domain/value-objects/email.value-object';
import { UserRepository } from '../persistence/persistence';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(email: string, fullName: string): Promise<User> {
    const user = new User(new Email(email), fullName);
    return this.userRepository.save(user);
  }

  async deactivateUser(userId: string): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error('User not found');
    user.deactivate();
    await this.userRepository.save(user);
  }
}
