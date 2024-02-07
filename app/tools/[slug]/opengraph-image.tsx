import { CATEGORIES, isValidCategoryName, isValidToolName } from '@/lib/tools'
import TOOLS from '@/tools'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'dvlp.haus | Tool'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const encodeSvg = (data: string) => {
  const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/'/g, '"')

  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')

  return data.replace(symbols, encodeURIComponent)
}

function replaceCurrentColor(svgString: string, replacementColor: string) {
  const regex = /stroke="currentColor"|fill="currentColor"/g
  return svgString
    .replace(regex, `stroke="${replacementColor}"`)
    .replace(regex, `fill="${replacementColor}"`)
}

// Image generation
export default async function Image({
  params: { slug },
}: {
  params: { slug: string }
}) {
  // Font
  const cabinBold = fetch(
    new URL('../../../public/Cabin-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const cabinRegular = fetch(
    new URL('../../../public/Cabin-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  if (!isValidToolName(slug)) {
    return null
  }

  const tool = TOOLS[slug]
  const categoryKey = tool.category
  const category = isValidCategoryName(categoryKey)
    ? CATEGORIES[categoryKey]
    : CATEGORIES.other

  const iconImport = await fetch(category.iconRef)
    .then((res) => res.text())
    .catch((error) => console.error('error ', error.toString()))

  const encodedIcon = iconImport
    ? replaceCurrentColor(encodeSvg(iconImport), '#fff')
    : null

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          padding: '56px 24px',
          display: 'flex',
        }}
      >
        <div
          style={{
            fontSize: 96,
            background: '#0c0a09',
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '48px',
            padding: '48px',
            border: '8px solid #e11d48',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              // backgroundColor: 'green',
              height: '520px',
              width: '520px',
              top: '-4px',
              right: '-72px',
              overflow: 'visible',
              // borderStyle: 'solid',
              // borderWidth: '0px 0px 160px 60px',
              // borderColor: 'teal pink burlywood purple',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              // width='340'
              height='101%'
              viewBox='0 0 340 342'
            >
              <defs>
                <clipPath id='clip-path'>
                  <rect
                    id='Rectangle_3'
                    width='340'
                    height='342'
                    transform='translate(559.48 -0.132)'
                    fill='#0c0a09'
                    stroke='#e11d48'
                    strokeWidth='21'
                  />
                </clipPath>
              </defs>
              <g
                id='Mask_Group_1'
                transform='translate(-559.48 0.132)'
                clip-path='url(#clip-path)'
              >
                <path
                  id='Path_1'
                  data-name='Path 1'
                  d='M61.05,86.392,925.8,0l-61.05,484.654L0,571.046Z'
                  transform='translate(772.972 -187.024) rotate(22)'
                  fill='#e11d48'
                />
              </g>
            </svg>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '0 0 8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '42px',
                width: '42px',
              }}
            >
              {encodedIcon ? (
                <img src={`data:image/svg+xml,${encodedIcon}`} />
              ) : null}
            </div>
            <div
              style={{
                fontSize: '28px',
                color: '#A1A1A1',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              {category.name}
            </div>
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: '1.24',
              color: '#fff',
              width: '70%',
              height: '100%',
              display: 'flex',
            }}
          >
            {tool.name}
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              padding: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 48,
                  color: '#fff',
                }}
              >
                dvlp.haus
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Cabin',
          data: await cabinRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Cabin',
          data: await cabinBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
