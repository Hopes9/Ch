

const input_img = document.getElementById('img');
const input_name = document.getElementById('name');
const btn = document.getElementById('btn')
const output = document.getElementById('output')



btn.addEventListener('click', ()=>{
	let img = document.createElement('img') 
	let text = document.createElement('p') 
	img.src = input_img.value;
	text.textContent = input_name.value;
	output.append(img)
	output.append(text)
})
