const elForm = document.querySelector('.js-form');
const elInp = document.querySelector('.js-inp');
const elList = document.querySelector('.js-list');
const elStr1 = document.querySelector('.js-str1');
const elStr2 = document.querySelector('.js-str2');
const elStr3 = document.querySelector('.js-str3');

const todos = [];

let renderTodos = (array, node) => {
   node.innerHTML = ''
   array.forEach((item) => {
      let newItem = document.createElement('li')
      let newSpan = document.createElement('span')
      let newButton = document.createElement('button')
      let newInput = document.createElement('input')

      newSpan.textContent = item.text
      newInput.type = 'checkbox'
      newButton.textContent = 'Delete'

      newItem.appendChild(newInput)
      newItem.appendChild(newSpan)
      newItem.appendChild(newButton)
      node.appendChild(newItem)

      newItem.setAttribute('class', 'd-flex align-items-center mb-2 mt-3')
      newButton.setAttribute('class', 'ms-4 btn btn-danger js-btn')
      newInput.setAttribute('class', 'form-check-input me-4 js-checkbox')

      newButton.dataset.todoId = item.id
      newInput.dataset.todoId = item.id

      if(item.isComplated){
         newSpan.setAttribute('class', 'text-decoration-line-through')
         newInput.checked = true;
      }
   });
}

elForm.addEventListener('submit', (evt) => {
   evt.preventDefault()
   let elInpVal = elInp.value;
   elInp.value = ''
   todos.push({
      id: todos.length +1,
      text: elInpVal,
      isComplated: false,
   })
   elStr1.textContent = todos.length

   let unComplate = todos.filter((el) => !el.isComplated);
	elStr3.textContent = unComplate.length;

   renderTodos(todos,elList)
})


elList.addEventListener('click', function(evt) {
   if(evt.target.matches('.js-btn')){
      let todoId = evt.target.dataset.todoId;
      let findedIndex = todos.findIndex((el) => el.id == todoId);
      todos.splice(findedIndex, 1)

      elStr1.textContent = todos.length
      
      let Complate = todos.filter((el) => el.isComplated);
		elStr2.textContent = Complate.length;

      let unComplate = todos.filter((el) => !el.isComplated);
		elStr3.textContent = unComplate.length;

      renderTodos(todos, elList)
   }

   if(evt.target.matches('.js-checkbox')){
      let todoId = +evt.target.dataset.todoId;
      let findedItem = todos.find((el) => el.id == todoId);
      findedItem.isComplated = !findedItem.isComplated;

      let Complate = todos.filter((el) => el.isComplated);
		elStr2.textContent = Complate.length;

      let unComplate = todos.filter((el) => !el.isComplated);
		elStr3.textContent = unComplate.length;

      renderTodos(todos, elList)
   }
})















// -----------------------------1-sinif ishini masalasi--------------------

// let elForm = document.querySelector('.js-form')
// let elText = document.querySelector('.js-text')
// let elInp1 = document.querySelector('.js-inp1')
// let elInp2 = document.querySelector('.js-inp2')
// let elInp3 = document.querySelector('.js-inp3')
// let elSpan = document.querySelector('.js-span')

// let array = ['bir', 'ikki', 'uch', 'tort']
// elText.textContent = array


// elForm.addEventListener('submit', function(evt){
//    evt.preventDefault()
//    let elInpVal1 = elInp1.value
//    let elInpVal2 = elInp2.value
//    let elInpVal3 = elInp3.value



//    array.splice(elInpVal1,elInpVal2,elInpVal3)

//    elSpan.textContent = array
// })