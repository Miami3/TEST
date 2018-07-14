
export const getImageItem = () => {
    return {
        url: `https://picsum.photos/${getRandom(3)}0${getRandom(53)}?random`, // Get random image each time
        value: `grid_item_${getRandom(3)}` // Generate random value for each image
    }
};

export const getRandom = (num) => {
    return Math.floor(Math.random() * Math.floor(num)) + 1;
};