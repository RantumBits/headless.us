import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const SingleItem = ({ data, pageContext }) => {
  const { name, date, url, category, tags, amazonlink, sociallink, about, country, state, city, like } = data.googleSheetListRow

  return (
    <Layout>
      <SEO
        title={name}
        description={about || ' '}
        pathname={url}
      />
      <Header title={name} date={date} />
      <Container>
        <br/ >URL = <Content input={url} />
        <br/ >Category = <Content input={category} />
        <br/ >Tags = <Content input={tags} />
        <br/ >AmazonLink = <Content input={amazonlink} />
        <br/ >SocialLink = <Content input={sociallink} />
        <br/ >Country = <Content input={country} />
        <br/ >City = <Content input={city} />
        <br/ >State = <Content input={state} />
        <br/ >Like = <Content input={like} />
      </Container>
    </Layout>
  );
};

export default SingleItem;

export const query = graphql`
  query($pathSlug: String!) {
    googleSheetListRow(name: {eq: $pathSlug}) {
      name
      date
      url
      category
      tags
      amazonlink
      sociallink
      about
      country
      state
      city
      like
    }
  }
`;
