// Function to dynamically load images from a folder
function loadImages(gridId, imagesData) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    imagesData.forEach(image => {
        const item = document.createElement(\'div\');
        item.classList.add(\'image-item\');
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="image-info">
                <h3>${image.title}</h3>
                <p>${image.author}</p>
                <span class="category">${image.category}</span>
            </div>
        `;
        grid.appendChild(item);
    });
}

// --- USER INSTRUCTIONS ---
// To add your own images:
// 1. Place your JPG or PNG image files in the \'images\' folder.
// 2. Update the arrays below (bookCoversData and otherMediaData) with the details for your images.
//    - src: The path to your image file (e.g., \'images/my-book-cover.jpg\')
//    - title: The title of the book, media, etc.
//    - author: The author, artist, director, etc.
//    - category: A category for the item (e.g., \'Sci-Fi\', \'Manga\', \'Film\', \'Game\', \'Music\')
// 3. Make sure the \'id\' is unique for each item.
// -------------------------

const bookCoversData = [
    {
        id: 1,
        src: \'images/book1.jpg\', // REPLACE with your image path
        title: \'The Restaurant of Lost Recipes\', // REPLACE with your title
        author: \'Hisashi Kashiwai\', // REPLACE with your author
        category: \'Literary Fiction\' // REPLACE with your category
    },
    {
        id: 2,
        src: \'images/book2.jpg\', // REPLACE with your image path
        title: \'The Seas\', // REPLACE with your title
        author: \'Samantha Hunt\', // REPLACE with your author
        category: \'Contemporary Fantasy\' // REPLACE with your category
    },
    {
        id: 3,
        src: \'images/book3.jpg\', // REPLACE with your image path
        title: \'Meet Me in the Bathroom\' , // REPLACE with your title
        author: \'Lizzy Goodman\', // REPLACE with your author
        category: \'Punk Nonfiction\' // REPLACE with your category
    }
    {
        id: 4,
        src: \'images/book4.jpg\', // REPLACE with your image path
        title: \'Convenience Store Woman\' , // REPLACE with your title
        author: \'Sayaka Murata\', // REPLACE with your author
        category: \'Literary Fiction\' // REPLACE with your category
    }
    {
        id: 5,
        src: \'images/book5.jpg\', // REPLACE with your image path
        title: \'The Pisces\' , // REPLACE with your title
        author: \'Melissa Broder\', // REPLACE with your author
        category: \'Humor\' // REPLACE with your category
    }
    {
        id: 6,
        src: \'images/book6.jpg\', // REPLACE with your image path
        title: \'The Gray House\' , // REPLACE with your title
        author: \'Mariam Petrosyan\', // REPLACE with your author
        category: \'Metaphysical\' // REPLACE with your category
    }



    // Add more book cover objects here following the format above
];

const otherMediaData = [
    {
        id: 4,
        src: \'images/media1.jpg\', // REPLACE with your image path
        title: \'BECK\' , // REPLACE with your title
        author: \'Harold Sakuishi\', // REPLACE with your author
        category: \'Manga\' // REPLACE with your category
    },
    {
        id: 5,
        src: \'images/media2.jpg\', // REPLACE with your image path
        title: \'FLCL\', // REPLACE with your title
        author: \'Kazuya Tsurumaki\', // REPLACE with your author
        category: \'Anime\' // REPLACE with your category
    },
    {
        id: 6,
        src: \'images/media3.jpg\', // REPLACE with your image path
        title: \'Happy Together\', // REPLACE with your title
        author: \'Wong Kar Wai\', // REPLACE with your author
        category: \'Movie\' // REPLACE with your category
    }
    // Add more other media objects here following the format above
];

// Load images when the DOM is fully loaded
document.addEventListener(\'DOMContentLoaded\', () => {
    loadImages(\'book-cover-grid\', bookCoversData);
    loadImages(\'other-media-grid\', otherMediaData);
});


