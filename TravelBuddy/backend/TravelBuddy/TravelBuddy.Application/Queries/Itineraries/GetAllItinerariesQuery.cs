using TravelBuddy.Application.Models.Itineraries;

namespace TravelBuddy.Application.Queries.Itineraries
{
	public class GetAllItinerariesQuery
	{
        public GetAllItinerariesQuery()
        {
            this.UserId = new Guid();
        }

		public string? SearchTerm { get; set; }

		public ItinerarieSorting OrderBy { get; set; } 

		public Guid UserId { get; set; }
	}
}	
