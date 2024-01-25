namespace TravelBuddy.Infrastructure.Services
{
	public class TripService : BaseService, ITripService
	{
		public TripService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

		public Task AddTrip(Trip trip)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<GetTripDto>> GetUserTrips(Guid userId)
		{
			var trips = await this.UnitOfWork.TripRepository.GetAllAsReadOnlyAsync(userId);
			var tripDtos = this.Mapper.Map<List<GetTripDto>>(trips);
			return tripDtos;
		}
	}
}
