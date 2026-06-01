import React from 'react';
import BlogCard from '../components/BlogCard';

const blogData = [

  {
    title: 'My Journey Through the WSO2 Linux Systems Administration & DevOps Engineering Training',
    image: 'https://cdn-images-1.medium.com/max/1024/1*Vx1L7nb_CF0Ag-1omKJU-A.jpeg',
    link: 'https://medium.com/@ritharaedirisinghe/my-journey-through-the-wso2-linux-systems-administration-devops-engineering-training-f15e22af9246',
  },

    {
    title: 'From 1,500 Applicants to 28 Graduates: My Intense Yet Rewarding Calcey Springboard Scholarship Experience',
    image: '/blogs/springboard.webp',
    link: 'https://medium.com/@ritharaedirisinghe/from-1-500-applicants-to-28-graduates-my-intense-yet-rewarding-calcey-springboard-scholarship-af577aecf1cf',
  },

  {
    title: '[Part 1 — Devops Journey] Getting Started with Terraform for Microservices Infrastructure',
    image: 'https://cdn-images-1.medium.com/max/1024/0*sshV-Smj8xvE8Jz3.png',
    link: 'https://medium.com/@ritharaedirisinghe/part-1-devops-journey-getting-started-with-terraform-for-microservices-infrastructure-0f63ea98a8f5',
  },
    {
    title: '[Part 2 — Devops Journey] Infrastructure Automation with Terraform & Kubespray',
    image: 'https://cdn-images-1.medium.com/max/1024/1*eyojmpAYHuaPEF-zFZ_hLw.png',
    link: 'https://medium.com/@ritharaedirisinghe/part-2-devops-journey-infrastructure-automation-with-terraform-kubespray-70a11cebc1ab',
  },
    {
    title: '[Part 3— Devops Journey] Continuous Deployment with ArgoCD',
    image: 'https://cdn-images-1.medium.com/max/800/0*cBL6VTKZmHli8QSn.png',
    link: 'https://medium.com/@ritharaedirisinghe/part-3-devops-journey-continuous-deployment-with-argocd-31adff370863',
  },
  
  {
    title: '[Part 4— Devops Journey] Dealing with Istio, Kiali and Jaeger',
    image: 'https://cdn-images-1.medium.com/max/476/1*mGIN43LUnI5K_fitX82QGg.png',
    link: 'https://medium.com/@ritharaedirisinghe/part-4-devops-journey-dealing-with-istio-kiali-and-jaeger-55dad439fbb7',
  },

  {
    title: 'Configure External IdP for APIM Publisher & Devportal (WSO2 APIM 4.6.0)',
    image: 'https://cdn-images-1.medium.com/max/572/1*f4LEFw68b9b11MDj8a2l4A.png',
    link: 'https://medium.com/@ritharaedirisinghe/configure-external-idp-for-apim-publisher-devportal-wso2-apim-4-6-0-afef3d9602c8',
  },
  {
    title: 'How Backstage Authenticates Users with Asgardeo',
    image: 'https://cdn-images-1.medium.com/max/865/1*X23IuQYS9cyiVLvnrlc2uw.png',
    link: 'https://medium.com/@ritharaedirisinghe/how-backstage-authenticates-users-with-asgardeo-d53c3d3a176f',
  },
  {
    title: 'How to Fetch Users from Asgardeo via SCIM 2.0 API using Postman',
    image: 'https://cdn-images-1.medium.com/max/958/1*mEgb2Hq0jn5TkoILagvIzA.png',
    link: 'https://medium.com/@ritharaedirisinghe/how-to-fetch-users-from-asgardeo-via-scim-2-0-api-using-postman-f912ad034464',
  },
  {
    title: 'Predicting the Next Character with RNN: A Simple Introduction Using Shakespeare’s Text',
    image: '/blogs/rnn.webp',
    link: 'https://medium.com/@ritharaedirisinghe/predicting-the-next-character-with-rnn-a-simple-introduction-using-shakespeares-text-88e62550ac17',
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
    {
    title: 'Building the API Explorer Pipeline Backend',
    image: '/blogs/pipeline_backend.png',
    link: 'https://medium.com/@ritharaedirisinghe/building-the-api-explorer-pipeline-backend-3d4e775deebb',
  },
    {
    title: 'Building an API Explorer for API Dash — My Research & Planning Process',
    image: '/blogs/research_planning.png',
    link: 'https://medium.com/@ritharaedirisinghe/building-an-api-explorer-for-api-dash-my-research-planning-process-3d16ef3c48f2',
  },
];

const MyBlogsSection: React.FC = () => {
  return (
    <section id='blogs' className="w-full px-2 py-4 flex flex-col gap-6 max-w-6xl mx-auto">
      <div className=" max-w-4xl grid grid-cols-1 mx-auto w-full sm:grid-cols-2 md:grid-cols-3 gap-8  place-items-center">
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
