namespace TravelBuddy.Infrastructure.Repository
{
	public class TripRepository : ITripRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public TripRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public async Task AddAsync(Trip trip)
		{
			await this.dbContext.AddAsync(trip);
		}

		public async Task<ICollection<Trip>> GetAllAsReadOnlyAsync(Guid userId)
		{
			var trips = await this.dbContext
				.Trips
				.AsNoTracking()
				.Include(x => x.Itineraries)
				.Include(x => x.Guests)
				.Include(x => x.Creator)
				.Where(trip => trip.Creator.Id == userId)
				.ToListAsync();

			return trips;
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

		public async Task SaveAsync()
		{
			await this.dbContext.SaveChangesAsync();
		}

		public void Update(Trip trip)
		{
			throw new NotImplementedException();
		}
	}
}
