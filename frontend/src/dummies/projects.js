const projects = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 10; i++) {
  projects.push({
    id: i,
    title: `Project ${i}`,
    description: `This is a dummy project ${i}`,
    image: `https://picsum.photos/id/${i}/400/400`,
    link: `https://picsum.photos/id/${i}/400/400`,
    tags: [
      { id: i, name: `tag ${i}` },
      { id: i + 1, name: `tag ${i + 1}` },
      { id: i + 2, name: `tag ${i + 2}` },
    ],
  });
}

export default projects;
