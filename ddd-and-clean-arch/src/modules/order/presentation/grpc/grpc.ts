// presentation/grpc/grpc.ts
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from '../../user/user.service';

interface GetUserByIdRequest {
  id: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
}

@Controller()
export class GrpcController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUserById')
  async getUserById(data: GetUserByIdRequest): Promise<UserResponse> {
    const user = await this.userService.getUserById(data.id);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
