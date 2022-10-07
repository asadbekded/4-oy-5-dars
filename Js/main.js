const elForm = document.querySelector('.js-form');
const elInp = document.querySelector('.js-inp');
const elList = document.querySelector('.js-list');
const elStr1 = document.querySelector('.js-str1');
const elStr2 = document.querySelector('.js-str2');
const elStr3 = document.querySelector('.js-str3');
const elBtns = document.querySelector('.btn-box');

const todos = []

let renderTodos = (array, list) => {
   list.innerHTML = ''

   elStr1.textContent = todos.length
   elStr2.textContent = todos.filter((el) => el.isComplate).length;
   elStr3.textContent = todos.filter((el) => !el.isComplate).length;

   array.forEach((item) => {
      let newItem = document.createElement('li');
      let newSpan = document.createElement('span');
      let newInput = document.createElement('input');
      let newBtn = document.createElement('button');

      newSpan.textContent = item.text;
      newInput.type = 'checkbox';
      newBtn.textContent = 'Delete'

      newItem.appendChild(newInput)
      newItem.appendChild(newSpan)
      newItem.appendChild(newBtn)
      list.appendChild(newItem)

      newItem.setAttribute('class', 'd-flex align-items-center mt-3 mb-3')
      newBtn.setAttribute('class', 'btn btn-danger ms-4 js-btn')
      newInput.setAttribute('class', 'form-check-input me-4 js-checked')
      newSpan.setAttribute('class', 'text-info')

      newBtn.dataset.todoId = item.id
      newInput.dataset.todoId = item.id

      if(item.isComplate){
         newSpan.setAttribute('class', 'text-decoration-line-through text-danger')
         newInput.checked = true;
      }
   })
}

elForm.addEventListener('submit', function(evt) {
   evt.preventDefault();
   elInpVal = elInp.value
   elInp.value = ''
   todos.push({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      text: elInpVal,
      isComplate: false,
   })

   renderTodos(todos, elList)
})

elList.addEventListener('click', function(evt) {
   if(evt.target.matches('.js-btn')){
      let todoId = evt.target.dataset.todoId;
      let findedIndex = todos.findIndex((el) => el.id == todoId)
      todos.splice(findedIndex, 1)

      renderTodos(todos, elList)
   }

   if(evt.target.matches('.js-checked')){
      let todoId = +evt.target.dataset.todoId;
      let findedItem = todos.find((el) => el.id == todoId)
      findedItem.isComplate = !findedItem.isComplate
      
      renderTodos(todos, elList)
   }
})

elBtns.addEventListener('click', function(evt) {
   if(evt.target.matches('.btn-all')){
      renderTodos(todos, elList)
   }
   if(evt.target.matches('.btn-comp')){
      const result = todos.filter((el) => el.isComplate);
      renderTodos(result, elList)
   }
   if(evt.target.matches('.btn-uncomp')){
      const result = todos.filter((el) => !el.isComplate);
      renderTodos(result, elList)
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