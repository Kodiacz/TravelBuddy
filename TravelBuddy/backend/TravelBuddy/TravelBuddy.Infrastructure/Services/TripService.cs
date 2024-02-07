namespace TravelBuddy.Infrastructure.Services
{
	public class TripService : BaseService, ITripService
	{
		public TripService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

		public async Task AddTrip(AddTripDto tripDto)
		{
			Trip dbTrip = this.Mapper.Map<Trip>(tripDto);
			await this.UnitOfWork.TripRepository.AddAsync(dbTrip);
			await this.UnitOfWork.SaveAsync();
		}

		public async Task<IEnumerable<GetTripDto>> GetUserTrips(Guid userId)
		{
			var trips = await this.UnitOfWork.TripRepository.GetAllAsReadOnlyAsync(userId);
			var tripDtos = this.Mapper.Map<List<GetTripDto>>(trips);
			return tripDtos;
		}
	}
}
