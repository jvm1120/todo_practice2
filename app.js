// $("#addTodo").click(function(){
//     const inputTodo = $("input").val();
//     $("#todoList").append("<li><input type='checkbox'>"+ inputTodo + "</li>");
//     $("input").val("");
// });


const box = document.getElementById('test');

for (i = 0; i < 10; i++){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "child");
    const hue = i * (360 / 10); 
    newDiv.style.backgroundColor = `hsl(${hue}, 60%, 60%)`;
    box.appendChild(newDiv);
}



