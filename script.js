function volume_sphere() {
    //Write your code here;

	let form= document.getElementById('MyForm');
		form.preventDefault();
	let radius=document.getElementById('radius');
	let r=Number(radius.value);
	let pi=Math.PI;
	let v=Math.round(((4/3)*pi*Math.pow(r,3))*10000)/10000;
	let vol==document.getElementById('volume');
	vol.value=v;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
