import React from "react";
import { Button, Card, Container, Grid, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { BlogTypes } from "@/types/Fary";

const BlogPost = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const filterItemsByCategory = (categoryName: string) =>
    repo.body.filter((item) => item.category.name === categoryName);

  const category2Items = filterItemsByCategory("အကြောင်းအရာများ");
  const categoryItems = filterItemsByCategory("နှစ်ကူးမေတ္တာလက်ဆောင်");

  const navigateToCategory = (categoryName: string) => {
    router.push(`/blog/${categoryName}`);
  };

  return (
    <Container>
      <Text>Blog Post</Text>
      <Grid>
        {category2Items.map((item) => (
          <Grid.Col key={item.id} span={4}>
            <Card bg="red" h={300} w={300}>
              <Image src={item.image.path} alt="hello " fill />
            </Card>
          </Grid.Col>
        ))}
        <Button
          onClick={() => navigateToCategory(category2Items[0]?.category.name)}
        >
          show more
        </Button>
      </Grid>

      <Grid>
        {categoryItems.map((item) => (
          <Grid.Col key={item.id} span={4}>
            <Card bg="red" h={300} w={300}>
              <Image src={item.image.path} alt="hello " fill />
            </Card>
          </Grid.Col>
        ))}
        <Button
          onClick={() => navigateToCategory(categoryItems[0]?.category.name)}
        >
          show more
        </Button>
      </Grid>
    </Container>
  );
};

export default BlogPost;

export const getServerSideProps: GetServerSideProps<{
  repo: BlogTypes;
}> = async () => {
  const res = await fetch("https://api.farytaxi.com/api/user/landing/blog");
  const repo = await res.json();
  return { props: { repo } };
};
