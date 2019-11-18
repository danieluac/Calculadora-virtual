/**
* this script will be used for 
* Manipulation of the virtual calculator
* it serves as example for the test in this class
* A1, A2, A3 and M 11º of the ITEL IIº
*@Author Daniel U AC
*@mail danieluac2@gmail.com
*@Github github.com/daniel-u-ac
**/
function ImportOperator(number1,operator,number2)
{
		number1 = Number(number1)
		number2 = Number(number2)
	
	if(operator == "+")
	{
		return Addition(number1,number2)

	}else if(operator == "-")
	{
		return Subtraction (number1,number2)

	}else if(operator == "x")
	{
		return Multiply (number1,number2)

	}else if(operator == "/")
	{
		return Division (number1,number2)

	}else if (operator == "^")
	{
		return Potency (number1,number2)
	}else if (operator == "%")
	{
		return RestDivision (number1,number2)
	}
}
function clean()
{
	$("input[value=C]").click(
		function()
		{
			$("#tela").val("")
			num1 = num2 = operator = ""
			state = state1 = 0
		})
}
/**
* this function serves for subtration numbers
*@param number1
*@param number2
*@return all type for number
**/
function Subtraction(number1,number2)
{
	return number1-number2
}
/**
* this function serves for Addition numbers
*@param number1
*@param number2
*@return all type for numbers
**/
function Addition(number1,number2)
{
	return number1 + number2
}
/**
* this function serves for Division numbers
*@param number1
*@param number2
*@return type float
**/
function Division(number1,number2)
{
	return number1/number2
}
function RestDivision(number1,number2)
{
	return number1%number2
}
/**
* this function serves for Multiply numbers
*@param number1
*@param number2
*@return type for input number
**/
function Multiply(number1,number2)
{
	 var finish = 0
	for(count=1;count<=number2;count++)
	{
		finish += number1	
	}
	return finish;
}
/**
* this function serves for Potency numbers integer positive
*@param number1
*@param number2
*@return type for number
**/
function Potency (base,exponent)
{
	var end = 0
	var start = base
		for(count=1;count<=exponent;count++)
		{
			end = start
			start = 0
			for(counting=1;counting<=base;counting++)
			{
				start += end				
			}		
		}

	if(exponent>0)
		return end
	else if(exponent==0)
		return 1
	else if(exponent<0)
		return "Somente numeros positivos inteiros"
}