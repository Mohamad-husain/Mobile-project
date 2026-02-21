import type { ApiResponse } from '@src/lib/api-types';
import { ENV } from '@src/lib/env';

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
};

export async function httpClient<T>(
  path: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  const response = await fetch(`${ENV.apiBaseUrl}${path}`, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = (await response.json().catch(() => null)) as T | null;

  return {
    data,
    error: response.ok ? null : 'Request failed',
    status: response.status,
  };
}
