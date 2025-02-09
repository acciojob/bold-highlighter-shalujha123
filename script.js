let strong = document.querySelectorAll("strong")
function highlight() {
    //Write your code here
	strong.forEach((ele)=>{
		ele.style.color = "rgb(0, 128, 0)"
	})


}


function return_normal() {
    //Write your code here
	strong.forEach((ele)=>{
		ele.style.color= "rgb(0, 0, 0)"
	})
    
}
