function volume_sphere(event) {
    //Write your code here;

	let form= document.getElementById('MyForm');
		event.preventDefault();
	let radius=document.getElementById('radius');
	let r=Number(radius.value);
	let vol=document.getElementById('volume');
	if(r=="NaN" || r<0){
		vol.value="NaN"
	}
	else{
	let pi=Math.PI;
	let v=Math.round(((4/3)*pi*Math.pow(r,3))*10000)/10000;
	
	vol.value=v;
	}
	
  
} 

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
