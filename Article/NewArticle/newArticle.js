//Create HTML for new article submission form
function newArticleMaker() {
	let newArticle = document.createElement('form');
	newArticle.classList.add('new-article');
	newArticle.name = 'new-article-form';

	let newArticleHeading = document.createElement('h2');
	newArticleHeading.textContent = 'Post New Article';
	newArticle.appendChild(newArticleHeading);

	let newTitle = document.createElement('input');
	newTitle.setAttribute('type', 'text');
	newTitle.setAttribute('placeholder', 'Title:');
	newArticle.appendChild(newTitle);

	let newDate = document.createElement('input');
	newDate.setAttribute('type', 'text');
	newDate.setAttribute('placeholder', 'Date:');
	newArticle.appendChild(newDate);

	let newFirstParagraph = document.createElement('textarea');
	newFirstParagraph.setAttribute('placeholder', 'First Paragraph:');
	newArticle.appendChild(newFirstParagraph);

	let newSecondParagraph = document.createElement('textarea');
	newSecondParagraph.setAttribute('placeholder', 'Second Paragraph:');
	newArticle.appendChild(newSecondParagraph);

	let newThirdParagraph = document.createElement('textarea');
	newThirdParagraph.setAttribute('placeholder', 'Third Paragraph:');
	newArticle.appendChild(newThirdParagraph);

	//Function to create a new article.
	function createNewArticle(e) {
		let newArticleText = {
			title: newTitle.value,
			date: newDate.value,
			firstParagraph: newFirstParagraph.value,
			secondParagraph: newSecondParagraph.value,
			thirdParagraph: newThirdParagraph.value,
		};
		//push new article to data array and re-render the articles to page.
		data.push(newArticleText);
		articles.appendChild(articleMaker(data[data.length - 1]));
		//Reset form on submission
		document.forms['new-article-form'].reset();
		e.preventDefault();
	}
	//Create a Submit button to add new article.
	let submit = document.createElement('input');
	submit.setAttribute('type', 'submit');
	newArticle.appendChild(submit);
	submit.addEventListener('click', createNewArticle);

	//Add button to submit new article to DOM
	const newArticleButton = document.querySelector('.new-article-button');

	//Make new article div appear on screen
	newArticleButton.addEventListener('click', (e) => {
		newArticle.classList.toggle('new-article--open');
	});

	return newArticle;
}

header.appendChild(newArticleMaker(menuItems));
