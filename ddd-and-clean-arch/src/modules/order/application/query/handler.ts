import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserByIdQuery } from './query';

// @QueryHandler(GetUserByIdQuery)
// export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
//   constructor(private readonly userRepository: UserRepository) {}

//   async execute(query: GetUserByIdQuery): Promise<UserDto> {
//     const user = await this.userRepository.findById(query.userId);
//     return new UserDto(user);
//   }
// }
