import React, { useState } from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import Container from '../../components/Container';
import SectionHeader from '../../components/SectionHeader';
import { Download, Search, BookOpen } from 'lucide-react';

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
  title: 'The Clarified ruling of mistakes done in solat - Glossary',
  file: '/books/The Clarified ruling of mistakes done in solat/Glossary.pdf',
});

const Books = () => {
  const [searchedBook, setSearchedBook] = useState('');
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchedBook.toLowerCase())
  );
  const actionClassName = "w-fit mt-2 text-sm px-3 py-1 gap-2 flex items-center bg-primary text-light rounded hover:bg-primaryHover"
  
  const BookGrid = ({ gridBooks }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {gridBooks.map((book, index) => {
          const title = book.title.split('-')[0];
          const description = book.title.split('-')[1];
          return (
            <div
              key={index}
              className="bg-muted rounded-lg flex flex-col justify-between py-4 px-3 hover:shadow-sm hover:border-primaryHover border-1 border-primary transition"
            >
              <h2 className="md:text-xl text-lg text-dark font-semibold mb-5">
                {title}{' '}
                {description && (
                  <>
                    <br />
                    <span className="text-xs font-light px-3 py-1 text-light bg-primaryHover mt-1 w-fit rounded-full">
                      {' '}
                      {description}
                    </span>
                  </>
                )}
              </h2>
              <div className='flex items-center gap-2'>
                <a
                href={book.file}
                className={actionClassName}
              >
                <BookOpen size={16} />
                Read
              </a>
                <a
                href={book.file}
                download
                className={actionClassName}
              >
                <Download size={16} />
                Download
              </a>
              </div>
              
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <PageLayout>
      <Container>
        <SectionHeader
          title="Download Books"
          subtitle="Click to download PDF books"
        />
        <div className="border-1 rounded-md border-primary flex items-center p-2 gap-3 md:w-1/2 w-full">
          <span>
            <Search />
          </span>
          <input
            type="text"
            value={searchedBook}
            onChange={(e) => setSearchedBook(e.target.value)}
            placeholder="Search books"
            className="outline-none w-full"
          />
        </div>
        <BookGrid gridBooks={filteredBooks} />
        {filteredBooks.length < 4 && (
          <>
            { filteredBooks.length === 0 && <p className="text-lg text-primary">
              Oops, {searchedBook} was not found.
            </p>}
            <BookGrid gridBooks={books.filter(book => !filteredBooks.includes(book))} />
          </>
        )}
      </Container>
    </PageLayout>
  );
};

export default Books;
