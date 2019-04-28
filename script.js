class Dropdown {
  constructor(selector, options) {
  	this.el = document.querySelector(selector)
  	this.items = options.items
  	this.el.querySelector('.dropdown__label').textContent = 'Chose the item...' 
  		// this.items[0].label

  	// dropdown toggle
  	this.el.addEventListener('click', event => {
  		if (event.target.classList.contains('dropdown__label')) {
  			this.el.classList.contains('open') ? 
  				this.close() : this.open()
  		}
  		else if (event.target.tagName.toLowerCase() === 'li') {
  			this.select(event.target.dataset.id)
  			this.close()
  		}
  	})

  	// creating list of <li> items
  	const itemsHTML = this.items.map(i => {
  		return `<li data-id="${i.id}">${i.label}</li>`
  	}).join(' ')

  	this.el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', 
  			itemsHTML);
  }

  open() {
  	this.el.classList.add('open')
  }


  close() {
  	this.el.classList.remove('open')
  }

  select(id) {
  	const item = this.items.find(i => i.id == id)
  	this.el.querySelector('.dropdown__label').textContent = item.label
  }
}


const dropdown = new Dropdown('#dropdown', {
	items: [
		{label: 'Sekiro', id: 'skr'},
		{label: 'Dark Souls', id: 'drsl'},
		{label: 'Bloodborne', id: 'bldbr'},
		{label: 'Skyrim', id: 'skrm'}
	]
})


/*
const selectElement = `
	<div class="dropdown open">
		<div class="dropdown__label">Selected</div>
		<ul class="dropdown__menu">
			<li>Item</li>
			<li>Item</li>
			<li>Item</li>
		</ul>
	</div>`;
*/
