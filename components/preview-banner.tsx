import Link from 'next/link'

const PreviewBanner = ({ preview }) => {
  return preview ? (
    <div
      style={{
        width: '100vw',
        height: '60px',
        background: 'salmon',
        color: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h3 style={{ padding: '10px' }}>Preview Mode</h3>
      <Link href="/api/exit-preview">
        <a>
          <button>Exit Preview Mode</button>
        </a>
      </Link>
    </div>
  ) : null
}

export default PreviewBanner
