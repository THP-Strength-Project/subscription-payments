export default function helloWorld({content}) {
  return (
    <div>
      <h1>Hello world</h1>
      {content.blogPosts[0].excerpt}
    </div>
  );
}


export async function getStaticProps() {
  const query = `
    query MyQuery {
      blogPosts {
        content
        category
        createdAt
        excerpt
      }
    }
  `
  
  const result = await fetch('graphmcmsurl/com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
   
    })
  })
  
  const data = await result.json()
  
  
  return {
    props: {
      content: data
    },
    
    revalidate: 10
  }
}
