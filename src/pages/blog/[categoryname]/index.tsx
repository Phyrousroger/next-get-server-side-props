import { BlogTypes } from "@/types/Fary";
import { Card, Container, Grid } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import React from "react";

const CategoryName = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { categoryname } = router.query;
  console.log(categoryname);

  const filteredItems = repo.body.filter((item) => {
    return item.category.name === "နှစ်ကူးမေတ္တာလက်ဆောင်";
  });
  const filterItem2 = repo.body.filter((item) => {
    return item.category.name === "အကြောင်းအရာများ";
  });
  const renderedItem =
    categoryname === "အကြောင်းအရာများ" ? filterItem2 : filteredItems;

  return (
    <Container>
      <Grid>
        {renderedItem.map((item) => {
          return (
            <Grid.Col key={item.id} span={4}>
              <Card
                h={300}
                w={300}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  router.push(`/blog/${item.category.name}/${item.id}`)
                }
              >
                <Image src={item.image.path} alt="hello " fill />
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryName;

export const getServerSideProps: GetServerSideProps<{
  repo: BlogTypes;
}> = async () => {
  const res = await fetch("https://api.farytaxi.com/api/user/landing/blog");
  const repo = await res.json();
  return { props: { repo } };
};
