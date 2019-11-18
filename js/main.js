
var num1 = num2 = ""
var operator = ""
var cal = state1 = state = 0
$(function()
{
	clean()

	$(".enter").click(
		function()
		{
			if(state1 == 0)
			{
				num1 += $(this).val()

				$("#tela").val(num1)	
			}else
			{
				num2 += $(this).val()

				$("#tela").val(num1+operator+num2)
			}
			
		}
	)

	$(".operator").click(
		function()
		{
			if(state == 0)
			{
				state1 = state = 1
				operator = $(this).val()
				$("#tela").val(num1+operator)
			}else
			{
				state1 = 1
			}
		}
	)

	$(".try").click(
		function()
		{
			if(state == 1)
			{
				if($(this).val() == "=")
				{
					var cal = ImportOperator(num1,operator,num2)
					$("#tela").val(cal)
					num1 = cal
					num2 = operator = ""
					state = 0
				}
			}
		}
	)

	$(".sqrt").click(
		function()
		{
			
			{
				cal = Math.sqrt($("#tela").val())
				$("#tela").val(cal)
				num1 = cal
			}
		}
	)
})

