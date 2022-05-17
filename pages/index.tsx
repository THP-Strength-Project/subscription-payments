import { getHomePage } from '../utils/graphcms';
import PreviewBanner from '../components/preview-banner';

export default function helloWorld({ content, preview }) {
  return (
    <div>
      <PreviewBanner preview={preview} />
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
