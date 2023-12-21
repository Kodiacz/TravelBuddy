namespace TravelBuddy.Infrastructure.Repository
{
	public class TripRepository : ITripRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public TripRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public Task AddAsync(Trip appointment)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Trip>> GetAllAsReadOnlyAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Trip>> GetAllAsReadOnlyAsync(Expression<Func<Trip, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Trip>> GetAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<Trip>> GetAllAsync(Expression<Func<Trip, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<Trip> GetByIdAsReadonlyAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<Trip> GetByIdAsReadonlyAsync(int id, Expression<Func<Trip, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<Trip> GetByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task SaveAsync()
		{
			throw new NotImplementedException();
		}

		public void Update(Trip appointment)
		{
			throw new NotImplementedException();
		}
	}
}
