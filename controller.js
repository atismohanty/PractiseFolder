// Declare the elements as variables
"use strict";

var country = document.getElementById("country");
//country.addEventListener("click", buildCountry());

var state = document.getElementById("state");
var city = document.getElementById("city");
var zip = document.getElementById("zip");
var countryValueCurr;
var stateValueCurr;



function getCountry()
{
alert(" Java Scipt File In Intact");

var request = new XMLHttpRequest();
request.responseType = 'JSON';

request.open('country.json','GET', true);
request.onreadystatechange = function()
{
	if (request.status===200 && request.readystate == 4 ) 
		{
			var result = request.responseText;
			return result;
			console.log(result);
		}

};

request.send();

}


function buildCountry()
{	
	//var list = {};
	//alert(" Java Scipt File In Intact");
	if (!country.value) 
	{

		$.get('country.json', function(data, status)
				{
					var list = data;
					var countryList = [];
					
					if ( list != 'NULL' && list !='') 
						{
							for (var i = 0 ; i < list.countries.length ; i++) 
							{
								
								var listNode  = document.createElement("OPTION");
								listNode.value = list.countries[i].id;
								listNode.text = list.countries[i].name ;
								country.appendChild(listNode);
							}

						}
				});
	}

	if(!countryValueCurr)
	{
		buildState();
	}
	else if( countryValueCurr != country.childNodes[country.selectedIndex].text )
	{
		buildState();
	}
}

function buildState()
{
	
	if (!country.value) 
	{
		//alert("Select the country first");
		country.focus();
	}
	else if( country.value == countryValueCurr)
	{

	}
	else
	{
		$.get('state.json', function(data, status)
				{
					var list = data;
					//state.removeChildNode();
					var countryID = country.value;
					countryValueCurr = country.childNodes[country.selectedIndex].text;
					
					var stateList = [];
					//alert(" Java Scipt File In Intact");
					if ( list != 'NULL' && list !='') 
						{
							// Clears the previousoy populated list to append the new values
							while(state.options.length)
							{
								state.removeChild(state.childNodes[0])
							}

							// Adds the new list to the states

							for (var i = 0 ; i < list.states.length ; i++) 
							{
								if (list.states[i].country_id == countryID )
								{
									var listNodeState =[];
									listNodeState = document.createElement("OPTION");
									listNodeState.value = list.states[i].id;
									listNodeState.text = list.states[i].name;
									state.appendChild(listNodeState);
								}
							}

						}
				});
	}

}

function buildCity()
{
	
	if (!state.value) 
	{
		alert("Select the state first");
		state.focus();
	}
	else if( state.value == stateValueCurr)
	{

	}
	else
	{
		$.get('city.json', function(data, status)
				{
					var list = data;
					var stateID = state.value;
					stateValueCurr = state.childNodes[state.selectedIndex].text;
					var cityList = [];
					//alert(" Java Scipt File In Intact");
					if ( list != 'NULL' && list !='') 
						{
							while(city.options.length)
							{
								city.removeChild(city.childNodes[0])
							}

							for (var i = 0 ; i < list.cities.length ; i++) 
							{
								if (list.cities[i].state_id == stateID )
								{
									var listNodeCity  = document.createElement("OPTION");
									listNodeCity.value = list.cities[i].id;
									listNodeCity.text = list.cities[i].name;
									city.appendChild(listNodeCity);
								}


							}

						}
				});
	}

}



//document.getElementById("btngetCntry").addEventLitener("click", buildCountry());

/*
$(document).ready(function()
{

	$("#btngetCntry").click(function()
		{
		alert(" Java Scipt File In Intact");
		$.get('country.json', function(data, status)
			{
				console.log(data);
			});
		});

});
*/

