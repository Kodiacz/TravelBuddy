namespace TravelBuddy.Application.Dtos.ItineraryDtos
{
	public class GetItineraryDto
	{
        public GetItineraryDto()
        {
			this.Activities = new List<GetActivityDto>();
        }

        public int Id { get; set; }

		public string Name { get; set; } = null!;

		public DateTime Date { get; set; }

		public IEnumerable<GetActivityDto> Activities { get; set; }
	}
}
