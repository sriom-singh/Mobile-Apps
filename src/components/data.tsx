//  data for titles, images, and descriptions
const titles = [
  "Title 1",
  "Title 2",
  "Title 3",
  /* ... 21 more titles ... */ "Title 24",
];
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  /* ... 21 more images ... */ "image24.jpg",
];
const descriptions = [
  "Description 1",
  "Description 2",
  "Description 3",
  /* ... 21 more descriptions ... */ "Description 24",
];

// Create an array of objects
const arrayOfObjects = Array.from({ length: 24 }, (_, index) => ({
  title: titles[index],
  image: images[index],
  description: descriptions[index],
}));

console.log(arrayOfObjects);
