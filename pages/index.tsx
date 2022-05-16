import { getHomePage } from '../utils/graphcms';

export default function helloWorld({ content, preview }) {
  return (
    <div>
      {preview && (
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
          Preview Mode
        </div>
      )}
      <h1>{content.title}</h1>
      <div>
        {content.pageFeatureSections.map((c) => {
          return (
            <div style={{ marginBottom: '20px' }}>
              <h2>{c.sectionTitle}</h2>
              <p>{c.sectionSubtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const page = await getHomePage(preview);

  console.log(page);

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  };
}
