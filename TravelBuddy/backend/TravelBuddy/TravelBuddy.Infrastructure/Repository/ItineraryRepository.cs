namespace TravelBuddy.Infrastructure.Repository
{
	public class ItineraryRepository : IItineraryRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public ItineraryRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public Task AddAsync(Itinerary appointment)
		{
			throw new NotImplementedException();
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

		public Task SaveAsync()
		{
			throw new NotImplementedException();
		}

		public void Update(Itinerary appointment)
		{
			throw new NotImplementedException();
		}
	}
}
