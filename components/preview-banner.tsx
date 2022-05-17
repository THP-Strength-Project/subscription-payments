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
      <h3>Preview Mode: Enabled</h3>
      <a href="/api/exit-preview">
        <button>Exit Preview Mode</button>
      </a>
    </div>
  ) : null;
};

export default PreviewBanner;
