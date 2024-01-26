import { Module } from '@nestjs/common';

// Custom Modules
import { JwtModule } from './modules/jwt';
import { DatabaseModule } from './modules/database';

import { AuthModule } from './modules/auth';
import { UserModule } from './modules/user';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    JwtModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
