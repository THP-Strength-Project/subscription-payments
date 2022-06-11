import { Box  } from '@mantine/core';
import { getHomePage } from '@/utils/graphcms';
import PreviewBanner from '@/components/preview-banner';
import Hero from '@/components/Hero'
import FeaturedIn from '@/components/FeaturedIn';
import Testimony from '@/components/Testimony';
import ProgramFeatures from '@/components/ProgramFeatures';
import VideoPlayer from '@/components/VideoPlayer';
import GradientCard from '@/components/GradientCard';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

const Home = ({ content, preview }) => {
  return (
    <Box>
      <PreviewBanner preview={preview} />
      {/* hero */}

      <Hero content={content}/>

      {/* logos */}
      <FeaturedIn content={content} />      

      {/* Video Player */}
      <Section>
        <VideoPlayer />
      </Section>

      {/* Program Features */}
      {content.featureSections.map((feature, i) => {
        const last = i === content.featureSections.length - 1;
        const even = i % 2 === 0;
        return (
          <Section
            sx={(theme) => ({
              backgroundColor: even ? theme.colors.gray[2] : theme.white
            })}
          >
            <ProgramFeatures feature={feature} alternate={even} />
          </Section>
        );
      })}

      <Section>
        <Testimony content={content} />
      </Section>

      {/* Gradient Card */}

      <GradientCard />
      <Box>
        <Footer content={content.footer} />
      </Box>
    </Box>
  );
};

export default Home;
export async function getStaticProps({ preview = false }) {
  const page = await getHomePage(preview);

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  };
}
