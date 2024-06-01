function addTodo() {

    // 1.get input
    var todoInput = document.getElementById("todoInput")
    // console.log("todoInput" , todoInput.value);

    //condition minimum 3 value ho to todo add kare varna alart karka return kar do.
    if (todoInput.value.length < 3) {
        alert("Enter correct todo value minimum 3")
        return
    }
    //...


    // get tbody div
    var todoBody = document.getElementById("todoBody")

    // 2.create tr & th
    //  var tbody = document.createElement('tbody')
    var tr = document.createElement('tr')

    var th = document.createElement('th');
    th.setAttribute("scope", "row");
    th.innerHTML = todoBody.children.length + 1; // counting 

    var td = document.createElement('td')
    // 3.set td value
    td.innerHTML = todoInput.value

    var secondTD = document.createElement('td')


    // creat btn Delete
    var deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("class", "btn btn-danger text-white fa fa-trash");
    deleteBtn.setAttribute("onClick", "delTodo(this)") //thie argument means sirf wahi element la jahe ga jis pa click kia.
    console.log("deleteBtn", deleteBtn)


    // creat btn Edit 
    var editBtn = document.createElement("i");
    editBtn.setAttribute("class", "btn text-white fa fa-edit btn-info mx-2");
    editBtn.setAttribute("onclick", "editTodo(this)")  //thie argument means sirf wahi element la jahe ga jis pa click kia.
    console.log("editTodo", editTodo)


    // append in tabel
    secondTD.appendChild(editBtn)
    secondTD.appendChild(deleteBtn)

    tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(secondTD)
    todoBody.appendChild(tr)

    // add todo input field empty
    todoInput.value = ""

}



function deleteAll() {
    // get parent table div. deleteAll pa click karna pa is ka jo sara html hai who empty ho jahe.
    var todoBody = document.getElementById("todoBody")
    todoBody.innerHTML = ""
}



//delete function
function delTodo(ele) {  // thie parameter ma received hota hai (ele).
    //console.log("delTodo", ele.parentNode.parentNode) 


    //ele.parentNode se parent element milta hai jo td hota hai. or
    ele.parentNode.parentNode.remove(); // ele.parentNode.parentNode se td ka parent element milta hai jo tr hota hai. 
    //tr ko remove karne ke liye remove() method use kiya jata hai. Is se poora tr row remove ho jata


    // Update the numbering
    var todoBody = document.getElementById("todoBody");
    for (var i = 0; i < todoBody.children.length; i++) {
        todoBody.children[i].children[0].innerHTML = i + 1;  //children[0]: Har tr ke andar pehla child th element hota hai. innerHTML = i + 1: th element ke andar ka text update kiya jata hai. i + 1 .
    }
    // looop start 0, i < todoParent.children.length: Loop tab tak chalega jab tak i ki value todoParent.children.length se choti hai. todoParent.children.length tbody ke andar jitne tr elements hain unki total count ko represent karta hai.i++: Har iteration ke baad i ki value 1 se increment hoti hai.
}



// edit function
function editTodo(ele) {

    // ele.parentNode: Ye ele (edit button) ka parent element (td) return karta hai. previousSibling: Ye td ka previous sibling (pehla td jismein text hai) ko return karta hai. 
    //innerHTML: Ye  value ko access karta hai jo previous sibling (td) ke andar hai.

    var editValue = prompt("Enter value", ele.parentNode.previousSibling.innerHTML)
    //console.log(editValue)

    if (editValue.length >= 3) {  //condition check karti hai editValue ka length 3 ya usse zyada hai ya nahi. Agar editValue ki length 3 ya usse zyada hai, to previous sibling (td jismein text hai) ka innerHTML update kiya jata hai naye editValue se.
        ele.parentNode.previousSibling.innerHTML = editValue;
    } else {
        alert("Enter correct value, minimum 3 characters.");
    }
}




