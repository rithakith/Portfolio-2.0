import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';

const blogData = [
  {
    title: 'Predicting the Next Character with RNN: A Simple Introduction Using Shakespeare’s Text',
    image: '/blogs/rnn.webp',
    link: 'https://medium.com/@ritharaedirisinghe/predicting-the-next-character-with-rnn-a-simple-introduction-using-shakespeares-text-88e62550ac17',
  },
  {
    title: 'From 1,500 Applicants to 28 Graduates: My Intense Yet Rewarding Calcey Springboard Scholarship Experience',
    image: '/blogs/springboard.webp',
    link: 'https://medium.com/@ritharaedirisinghe/from-1-500-applicants-to-28-graduates-my-intense-yet-rewarding-calcey-springboard-scholarship-af577aecf1cf',
  },
  {
    title: 'Exploring OAuth 2.0 : A Comprehensive Look at Authorization Grants',
    image: '/blogs/grants.webp',
    link: 'https://medium.com/@ritharaedirisinghe/exploring-oauth-2-0-a-comprehensive-look-at-authorization-grants-470aa46df0ef',
  },
  {
    title: 'Exploring OAuth 2.0 : A Guide to OAuth Roles and Protocol Flow',
    image: '/blogs/protocol.webp',
    link: 'https://medium.com/@ritharaedirisinghe/securing-your-data-with-oauth-a-guide-to-oauth-roles-and-protocol-flow-d0c289dcdabb',
  },
  {
    title: 'Getting Started with OAuth 2.0: The Key to Safe, Controlled Access',
    image: '/blogs/oauth.webp',
    link: 'https://medium.com/@ritharaedirisinghe/getting-started-with-oauth-2-0-the-key-to-safe-controlled-access-4f3b1a5c8d9e',
  },
];

const MyBlogsSection: React.FC = () => {
  return (
    <section id='blogs' className="min-h-screen w-full px-4 py-12 flex flex-col gap-8">
      <SectionTitle title="My Blogs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:mx-16  place-items-center">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default MyBlogsSection;
