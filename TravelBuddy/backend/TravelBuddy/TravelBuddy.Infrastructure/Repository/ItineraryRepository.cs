namespace TravelBuddy.Infrastructure.Repository
{
	public class ItineraryRepository : IItineraryRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public ItineraryRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public async Task AddAsync(Itinerary itinerary)
		{
			await this.dbContext.AddAsync(itinerary);
		}

		public Task<ICollection<Itinerary>> GetAllAsReadOnlyAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Itinerary>> GetAllAsReadOnlyAsync(Expression<Func<Itinerary, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Itinerary>> GetAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Itinerary>> GetAllAsync(Expression<Func<Itinerary, bool>> search)
		{
			throw new NotImplementedException();
		}

		public async Task<ICollection<Itinerary>> GetAllTripItinerariesAsync(int tripId)
		{
			return await this.dbContext
				.Itineraries
				.Include(x => x.Trip)
				.Include(x => x.Activities)
				.Where(x => x.TripId == tripId)
				.ToListAsync();
		}

		public Task<Itinerary> GetByIdAsReadonlyAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Itinerary> GetByIdAsReadonlyAsync(int id, Expression<Func<Itinerary, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<Itinerary> GetByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public async Task SaveAsync()
		{
			await this.dbContext.SaveChangesAsync();
		}

		public void Update(Itinerary itinerary)
		{
			throw new NotImplementedException();
		}
	}
}
