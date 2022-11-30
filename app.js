// Вывод значений у check-элементов

const btn = document.querySelector('.btn')
btn.addEventListener("click", checkElements) //вызов функции при нажатии на кнопку

// Сделать все input-счетчики неактивными
// const inputNumber = document.querySelectorAll("input[type *= 'number']").forEach(elem => {
// 	elem.className.toggle('.changeActive')
// })

// Выбрать элемент textarea, сделать неактивным, изменить цвет фона, убрать resize
const blockTextArea = document.querySelector('.textArea')
blockTextArea.style.resize = 'none'
blockTextArea.style.background = '#F1F1F1'
blockTextArea.setAttribute('disabled', '')

const choice = document.querySelectorAll("[class *= 'checkbox']")
const choice2 = document.querySelectorAll("input[type='number']")

for (let i = 0; i < choice.length; i++) {
	choice[i].addEventListener('click', () => choice2[i].classList.toggle('changeActive'))
}


// choice.forEach(elem => {
// 	elem.addEventListener('click', () => answer(elem.className))
// })

// function answer(className) {
// 	console.log(`${className}`)
// }


// const btnCheck = document.querySelectorAll("input:checked ~ input[type='number']")

// btnCheck.forEach(elem => elem.addEventListener('change', function () {
// 	if (this.checked) {
// 		console.log(`Checkbox ${elem.className} is checked`)
// 	} else {
// 		console.log(`Checkbox ${elem.className} is not checked`)
// 	}
// }))


// const btnCheck = document.querySelector('.checkbox1')
// btnCheck.addEventListener('change', function () {
// 	if (this.checked) {
// 		console.log(`Checkbox ${btnCheck.id} is checked`)
// 	} else {
// 		console.log(`Checkbox ${btnCheck.id} is not checked`)
// 	}
// })

// const btnCheck2 = document.querySelector('.checkbox2')
// btnCheck2.addEventListener('change', function () {
// 	if (this.checked) {
// 		console.log(`Checkbox ${btnCheck2.id} is checked`)
// 	} else {
// 		console.log(`Checkbox ${btnCheck2.id} is not checked`)
// 	}
// })

// const btnCheck3 = document.querySelector('.checkbox3')
// btnCheck3.addEventListener('change', function () {
// 	if (this.checked) {
// 		console.log(`Checkbox ${btnCheck3.id} is checked`)
// 	} else {
// 		console.log(`Checkbox ${btnCheck3.id} is not checked`)
// 	}
// })



// .forEach(elem => elem.addEventListener("click", checkChkBoxes))
// btnCheck.addEventListener("checked", checkChkBoxes)
// btnCheck.addEventListener("click", checkElements) 

// const btnCheck = document.querySelectorAll("input[class *= 'checkbox']")
// btnCheck.addEventListener("click", checkChkBoxes)

function checkChkBoxes() {
	const btnCheck = document.querySelectorAll("input[class *= 'checkbox']:checked ~ input[type='number']")
	console.log(btnCheck)
}





function checkElements() {
	// const elCheck = document.querySelectorAll("input[class*='checkbox']:checked ~ input[type='number']")
	// console.log(elCheck)
	const blockTextArea2 = document.querySelector('.textArea2')
	blockTextArea2.style.resize = 'none'
	blockTextArea2.style.background = '#F1F1F1'
	// blockTextArea2.setAttribute('disabled', '')

	let mess = document.querySelector('.textArea')
	mess.innerHTML = ''

	const elCheck = document.querySelectorAll("input[class*='checkbox']:checked + label")
	const elNumber = document.querySelectorAll("input[class*='checkbox']:checked ~ input[type='number']")

	if (elCheck.length > 0) {
		for (let i = 0; i < elCheck.length; i++) {
			mess.innerHTML += elCheck[i].textContent + ' ' + elNumber[i].value + '\n'
		}
	} else {
		mess.innerHTML += 'Не выбран ни один фрукт'
	}

	// Для операции над одним элементом 
	// const elTitle = document.querySelector('.spanTitle')
	// elTitle.classList.toggle('classUnderline')

	// Для операции над множеством элементов
	// const elLabel = document.querySelectorAll("input[class*='checkbox']:checked + label").forEach(elem => elem.classList.toggle('classUnderline'))



}


// Заполнение выпадающего списка "номера домов" 

// const btn2 = document.querySelector('.btn2')
// btn.addEventListener("click", checkElements)


const select = document.querySelector('#numHouse');

for (let i = 1; i <= 15; i++) {
	const option = document.createElement('option');
	option.textContent = option.value = i;
	select.append(option);
}

let mess2 = document.querySelector('.textArea2')

const btn2 = document.querySelector('.btn2').addEventListener('click', () => {
	mess2.innerHTML = ''
	const city = document.querySelector('#city')
	const street = document.querySelector('#street')
	const numHouse = document.querySelector('#numHouse')
	mess2.innerHTML += `${city.value} ${street.value} ${numHouse.value}`
})