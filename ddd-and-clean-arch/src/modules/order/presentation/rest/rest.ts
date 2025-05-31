// presentation/rest/rest.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../../user/user.service';

@Controller('users')
export class RestController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
