import { CacheModule } from '@nestjs/cache-manager';
import { Module, Global } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';

@Global()
@Module({
  imports: [
    CacheModule.register({
        store: redisStore,
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        ttl: parseInt(process.env.REDIS_TTL),
        isGlobal: true,
    }),
  ],
  exports: [CacheModule],
})
export class GlobalCacheModule {}
