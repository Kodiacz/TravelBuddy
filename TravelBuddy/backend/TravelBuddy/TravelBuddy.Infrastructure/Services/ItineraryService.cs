namespace TravelBuddy.Infrastructure.Services
{
	public class ItineraryService : BaseService, IItineraryService
	{
		public ItineraryService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

		public async Task<IEnumerable<GetItineraryDto>> GetTripItineraries(int tripId)
		{
			var dbTrips = await this.UnitOfWork.ItineraryRepository.GetAllTripItinerariesAsync(tripId);
			var tripDto = this.Mapper.Map<IEnumerable<GetItineraryDto>>(dbTrips);
			return tripDto;
		}
	}
}
