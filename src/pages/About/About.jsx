import PageLayout from '../../layouts/PageLayout/PageLayout';
import Container from '../../components/Container';
import SectionHeader from '../../components/SectionHeader';

const sections = [
  {
    sectionHeader: 'Overview',
    description:
      'Kushoo is an interactive web platform that helps Muslims learn what to do and say in ṣalāh (prayer). It combines step-by-step guidance with 3D illustrations, audio, and translations to make learning engaging and spiritually meaningful.',
  },
  {
    sectionHeader: 'Core Features',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-left">
        <li>
          🧍‍♂️ <strong>3D Animated Model:</strong> A realistic male figure (in
          jalabiyah) accurately performs each movement of prayer.
        </li>
        <li>
          🗣 <strong>Audio Recitations:</strong> Listen to correct pronunciation
          of every duʿāʾ and verse.
        </li>
        <li>
          📖 <strong>Translations & Meanings:</strong> Understand the meaning
          behind each recitation and position.
        </li>
        <li>
          🕋 <strong>Step-by-Step Guide:</strong> Follow the flow of ṣalāh —
          from Takbīrat al-Iḥrām to Taslīm.
        </li>
        <li>
          🌐 <strong>Cross-Platform Support:</strong> Works as a website and a
          PWA — practice online or offline, on any device.
        </li>
      </ul>
    ),
  },
  {
    sectionHeader: 'Technology Stack',
    description:
      'Kushoo is built with modern web technologies including React, Three.js for 3D visuals, TailwindCSS for styling, TypeScript for type safety, and Firebase as an optional backend.',
  },
  {
    sectionHeader: 'Our Goal',
    description:
      'To make learning ṣalāh accessible, immersive, and spiritually engaging — helping Muslims, both new and practicing, connect deeper with their prayers.',
  },
];

function About() {
  return (
    <PageLayout>
      <Container>
        <div className="space-y-8 text-primary font-medium text-lg">
          <SectionHeader title="About Khushu" subtitle="Discover the vision, features, and technology behind Khushu" />
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
                {section.sectionHeader}
              </h2>
              <div className="text-base text-center md:text-left">
                {section.description}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
}

export default About;
