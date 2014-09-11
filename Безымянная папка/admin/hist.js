var history=(function()
{

	var ArrayHist=[];
	ArrayHist.push("document.location.href = \"http://web/www/admin.php\"");

	return {
		SetPoint:function(string)
		{	

			ArrayHist.push(string); // Внести OnClick

		},
		GetPoint:function()
		{
			var i=ArrayHist.length-2;
			return ArrayHist[i];// вернуть последний OnClick
		},
		GoToBack:function()
		{
			ArrayHist.pop();
		}


	}







}());