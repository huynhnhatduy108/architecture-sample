// user.mapper.ts

import { User } from '../domain/entities/user.entity';
import { UserDto } from '../application/dto/user.dto';

export class UserMapper {
  static toDto(entity: User): UserDto {
    return {
      id: entity.id,
      email: entity.email,
      fullName: entity.fullName,
      isActive: entity.isActive,
    };
  }

  static toEntity(dto: UserDto): User {
    const user = new User();
    user.id = dto.id;
    user.email = dto.email;
    user.fullName = dto.fullName;
    user.isActive = dto.isActive ?? true;
    return user;
  }
}
