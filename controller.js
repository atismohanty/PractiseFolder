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
								if (!country.options) 
								{

									var listNode  = document.createElement("OPTION");
								}
								else
								{
									var listNode  = document.createElement("OPTION");
									//var listNode = country.options;
								}
								var textNode = document.createTextNode(list.countries[i].name + '-' + list.countries[i].id);
								listNode.appendChild(textNode);
								country.appendChild(listNode);
								//countryList.push(list.countries[i].name);
							}

						}
				}
			);
	}
}

function buildState()
{
	
	if (!country.value) 
	{
		alert("Select the country first");
		country.focus();
	}
	else if( country.value.split("-")[0] == countryValueCurr)
	{

	}
	else
	{
		$.get('state.json', function(data, status)
				{
					var list = data;
					//state.removeChildNode();
					var countryID = country.value.split("-")[1];
					countryValueCurr = country.value.split("-")[0];
					
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
									if (!state.options) 
									{
										var listNodeState = document.createElement("OPTION");
									}
									else
									{
										var listNodeState = document.createElement("OPTION");
										//var listNodeState = state.options;
									}
								var textNode = document.createTextNode(list.states[i].name + '-' + list.states[i].id);
								listNodeState.appendChild(textNode);
								state.appendChild(listNodeState);
								//stateList.push(list.states[i].name);
							}

						}
				}
			);
	}

}

function buildCity()
{
	
	if (!state.value) 
	{
		alert("Select the state first");
		state.focus();
	}
	else if( state.value.split("-")[0] == stateValueCurr)
	{

	}
	else
	{
		$.get('city.json', function(data, status)
				{
					var list = data;
					
					var stateID = state.value.split("-")[1];
					stateValueCurr = state.value.split("-")[0];
					
					var cityList = [];
					alert(" Java Scipt File In Intact");
					if ( list != 'NULL' && list !='') 
						{
							for (var i = 0 ; i < list.cities.length ; i++) 
							{
								if (list.cities[i].state_id == stateID )
								if (! city.options)
								{
									var listNodeCity  = document.createElement("OPTION");
								}
								else
								{
									//var listNodeCity  = country.options;
								}
								var textNode = document.createTextNode(list.cities[i].name + '-' + list.cities[i].id);
								listNodeCity.appendChild(textNode);
								city.appendChild(listNodeCity);
								//cityList.push(list.cities[i].name);
							}

						}
				}
			);
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

