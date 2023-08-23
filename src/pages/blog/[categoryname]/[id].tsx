import { BlogTypes } from "@/types/Fary";
import { Card, Container, Text } from "@mantine/core";
import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import React from "react";

const CategoryItem = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(post);
  return (
    <Container>
      <Text>{post.body.title}</Text>
      <Card w={300} h={500}>
        <Image src={post.body.image.path} alt="" fill />
      </Card>
    </Container>
  );
};

export default CategoryItem;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as any; // Get the dynamic parameter from context
  const res = await fetch(
    `https://api.farytaxi.com/api/user/landing/blog/${id}`
  ); // Replace with your API endpoint
  const post: BlogTypes = await res.json();

  return {
    props: {
      post,
    },
  };
};
