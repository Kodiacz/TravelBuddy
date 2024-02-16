using Newtonsoft.Json.Converters;
using System.Runtime.Serialization;

namespace TravelBuddy.Application.Models.Itineraries
{
	public enum ItinerarieSorting
	{
		[EnumMember(Value = "Date")]
		Date,
		[EnumMember(Value = "Name")]
		Name,
		[EnumMember(Value = "Trip")]
		Trip,
	}
}
