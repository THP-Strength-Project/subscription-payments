export default function helloWorld({ content }) {
  return (
    <div>
      <h1>Hello world</h1>
      <div>{content.blogPosts[0].title}</div>
    </div>
  );
}

export async function getStaticProps() {
  const query = `
    query MyQuery {
      blogPosts {
        title
        content
        category
        createdAt
        excerpt
      }
    }
  `;

  const result = await fetch(
    'https://api-us-west-2.graphcms.com/v2/cl34s61o5647a01xq8jpl51c6/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }
  );

  const data = await result.json();
  console.log(data.data);

  return {
    props: {
      content: data.data
    },

    revalidate: 10
  };
}
