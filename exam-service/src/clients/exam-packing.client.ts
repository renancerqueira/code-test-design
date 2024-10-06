import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ExamPackingClient {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache, // Injetando o cache manager
  ) {}

  async generateExamContent(formId: string): Promise<any> {
    const cacheKey = `examPacking_${formId}`;
    
    // Verifica se a resposta já está no cache
    const cachedResponse = await this.cacheManager.get(cacheKey);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    // Se não estiver no cache, faz a requisição HTTP
    const response = this.httpService.post(
      `${process.env.EXAM_PACKING_SERVICE_URL}/exam-packing-service/answer-sheet-contents/v1/${formId}/generate`,
    );

    // Usando firstValueFrom para converter o Observable em Promise
    const result = await firstValueFrom(response);

    // Armazena a resposta no cache sem definir o ttl (usa o valor global)
    await this.cacheManager.set(cacheKey, result.data);

    return result.data;
  }
}
