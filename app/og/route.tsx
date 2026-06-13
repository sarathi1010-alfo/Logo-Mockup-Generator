import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const type = searchParams.get('type');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '80%',
              gap: 20,
            }}
          >
            {type && (
              <span
                style={{
                  color: '#818cf8',
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {type}
              </span>
            )}
            <h1
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {title || 'MockBrand'}
            </h1>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                color: '#94a3b8',
                fontSize: 32,
                fontWeight: 500,
              }}
            >
              mockbrand.alfo.online
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
        },
      }
    );
  } catch (e: unknown) {
    const error = e as Error;
    console.error(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
