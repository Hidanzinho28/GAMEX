import service from '../lib/goatpay-webhook.cjs';
export async function POST(request) {
  const event = { httpMethod: request.method, headers: Object.fromEntries(request.headers), queryStringParameters: Object.fromEntries(new URL(request.url).searchParams), body: request.method === 'GET' ? '' : await request.text(), isBase64Encoded: false };
  const result = await service.handler(event);
  return new Response(result.body, { status: result.statusCode, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...result.headers } });
}
