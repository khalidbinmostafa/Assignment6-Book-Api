document.getElementById('search-error').style.display = 'none';
const searchBook = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    //    clear text after search
    searchBox.value = '';
    // document.getElementById('search-error').style.display = 'none';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.numFound)
            document.getElementById('similar-result').innerText = `Similar Data in Total: ${data.numFound}`;
            displayBookResult(data.docs.slice(0, 5))
        })
    // .then(error => findingError(error));
}

// const findingError = error => {
//     document.getElementById('search-error').style.display = 'block';
// }
// searchBook();

// const displaySimilarText = values => {
//     values = values.numFound;
//     const similarText = document.getElementById('similar-result');

//     // similarText.textContent = '';

//     values.forEach(value => {
//         console.log(value);
//         const div1 = document.createElement('div');
//         div1.classList.add('col1');
//         div1.innerHTML = `
//         <div>
//         <p class="text-success"></p>Similar Total Result: ${value.numFound}
//         </div>
//         `;
//         similarText.appendChild(div1);
//     });
// }
// displaySimilarText();

const displayBookResult = books => {
    if (books == 0) {
        document.getElementById('search-error').style.display = 'block';
    }
    else {
        // console.log(books);
        const bookResult = document.getElementById('book-result');
        // clear all information after searching another thing
        bookResult.textContent = '';
        books.forEach(book => {
            console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
     <div class="card h-100 w-75 mx-auto">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${book.title}</h5>
             <p class="card-text">Author-Name: ${book.author_name}</p>
             <p class="card-text">Publisher: ${book.publisher}</p>
             <p class="card-text">First-Published-Year: ${book.first_publish_year}</p>
         </div>
     </div>
     `;
            bookResult.appendChild(div);
        });
        document.getElementById('search-error').style.display = 'none';
    }

}
