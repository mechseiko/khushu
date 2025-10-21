import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import Container from '../../components/Container';
import SectionHeader from '../../components/SectionHeader';
import { Download } from 'lucide-react';

const books = [
  {
    title: 'A Simple Prayer Guide for New Muslims',
    file: '/books/A Simple Prayer Guide for New Muslims.pdf',
  },
  {
    title: 'Common mistakes on salat',
    file: '/books/Common mistakes on salat.pdf',
  },
  {
    title: 'Salat The Muslim Prayer Book',
    file: '/books/Salat The Muslim Prayer Book.pdf',
  },
  {
    title: 'The Clarified ruling of mistakes done in solat - Acknowledgement',
    file: '/books/The Clarified ruling of mistakes done in solat/Acknowledgement.pdf',
  },
  {
    title: 'The Clarified ruling of mistakes done in solat - Introduction',
    file: '/books/The Clarified ruling of mistakes done in solat/Introduction.pdf',
  },
];
for (let n = 1; n < 8; n++) {
  books.push({
    title: `The Clarified ruling of mistakes done in solat - Chapter ${n}`,
    file: `/books/The Clarified ruling of mistakes done in solat/Ch${n}.pdf`,
  });
}
books.push({
  title: 'The Clarified ruling of mistakes done in solat- Glossary',
  file: '/books/The Clarified ruling of mistakes done in solat/Glossary.pdf',
});

function Books() {
  return (
    <PageLayout>
      <Container>
          <SectionHeader
            title="Download Books"
            subtitle="Click to download PDF books"
          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => {
            const title = book.title.split('-')[0];
            const description = book.title.split('-')[1];
            return (
              <div
                key={index}
                className="bg-muted rounded-lg flex flex-col justify-between p-3 hover:shadow-sm transition"
              >
                <h2 className="text-xl text-dark font-semibold mb-5">
                  {title}{' '}
                  {description && (
                    <span className="text-lg font-light"> - {description}</span>
                  )}
                </h2>
                <a
                  href={book.file}
                  download
                  className="w-fit mt-2 px-4 py-2 gap-2 flex items-center bg-primary text-light rounded hover:bg-primaryHover"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </PageLayout>
  );
}

export default Books;
