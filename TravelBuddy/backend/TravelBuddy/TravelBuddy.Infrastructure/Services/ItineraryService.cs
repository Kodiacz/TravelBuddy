using TravelBuddy.Application.Queries.Itineraries;

namespace TravelBuddy.Infrastructure.Services
{
	public class ItineraryService : BaseService, IItineraryService
	{
		public ItineraryService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

		public async Task AddItinerary(AddItineraryDto itineraryDto)
		{
			Itinerary dbItinerary = this.Mapper.Map<Itinerary>(itineraryDto);
			await this.UnitOfWork.ItineraryRepository.AddAsync(dbItinerary);
			await this.UnitOfWork.SaveAsync();
		}

		public async Task<IEnumerable<GetItineraryDto>> GetAllUserTripsItineraries(GetAllItinerariesQuery query)
		{
			var dbItineraries = await this.UnitOfWork.ItineraryRepository.GetAllAsyncAsReadOnly(query);
			var itinerariesDto = this.Mapper.Map<IEnumerable<GetItineraryDto>>(dbItineraries);
			return itinerariesDto;
		}

		public async Task<IEnumerable<GetItineraryDto>> GetTripItineraries(int tripId)
		{
			var dbItineraries = await this.UnitOfWork.ItineraryRepository.GetAllTripItinerariesAsync(tripId);
			var itinerariesDto = this.Mapper.Map<IEnumerable<GetItineraryDto>>(dbItineraries);
			return itinerariesDto;
		}
	}
}
