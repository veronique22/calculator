
let a="",b="";

let sign="";

function operate()
{
	switch(sign)
	{
		case '+':
			a=String(Number(a)+Number(b))
			document.getElementById('display').innerHTML=a;
			b="";sign="";
			break;
		case '-':
			a=String(Number(a)-Number(b))
			document.getElementById('display').innerHTML=a;
			b="";sign="";
			break;
		case '*':
			a=String(Number(a)*Number(b))
			document.getElementById('display').innerHTML=a;
			b="";sign="";
			break;
		case '/':
			if(b==='0')
			{
				document.getElementById('display').innerHTML="Cannot divide by zero!";
				a="";b="";
				break;
			}
			else
			{
				a=String(Number(a)/Number(b))
				document.getElementById('display').innerHTML=a;
				b="";sign="";
				break;
      }
      default:
      {}
	}
}