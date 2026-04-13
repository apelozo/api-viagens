import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule, // Importamos para ter acesso ao repositório de Usuários
    JwtModule.register({
      global: true,
      secret: 'SUA_CHAVE_SECRETA_AQUI_MUITO_SEGURA', // Em produção, use variáveis de ambiente (.env)
      signOptions: { expiresIn: '7d' }, // Token expira em 7 dias
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}