import { CacheModule } from '@nestjs/cache-manager';
import { Module, Global } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';

@Global()
@Module({
  imports: [
    CacheModule.register({
        store: redisStore,
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379,
        ttl: parseInt(process.env.REDIS_TTL, 10) || 30000,
        isGlobal: true,
    }),
  ],
  exports: [CacheModule],
})
export class GlobalCacheModule {}
