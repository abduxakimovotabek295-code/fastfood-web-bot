import { Card, Grid, Image, Group, Text, Button } from "@mantine/core";
import React from "react";

const Card_List = ({ data }) => {
  return (
    <>
      <Grid gutter={"xs"}>
        {data?.map((item) => {
          return (
            <Grid.Col key={item._id} span={{ base: 6, md: 6, lg: 3 }}>
              <Card shadow="sm" padding="xs" radius="sm" withBorder>
                <Card.Section>
                  <Image
                    height={160}
                    fit="cover"
                    src={
                      item.image ||
                      "https://mma.prnewswire.com/media/1420527/Logo.jpg?p=facebook"
                    }
                    alt="Norway"
                  />
                </Card.Section>

                <Text fw={500} size="sm" mt={"xs"} lineClamp={1}>
                  {item.name}
                </Text>
                <Text fw={"bold"} size="sm" mt={"xs"}>
                  {item.price} so'm
                </Text>

                <Group mt={"md"} grow gap="xs" >
                  <Button color="blue" size="compact-xs">
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      Savatga Qo'shish
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </span>
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default Card_List;
