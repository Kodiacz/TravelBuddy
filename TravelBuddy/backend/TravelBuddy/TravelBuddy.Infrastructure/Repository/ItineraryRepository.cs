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

		public async Task<ICollection<Itinerary>> GetAllAsyncAsReadOnly(GetAllItinerariesQuery query)
		{
			IQueryable<Itinerary> itinerariesQuery = this.dbContext
				.Itineraries
				.AsQueryable()
				.AsNoTracking()
				.Include(x => x.Trip)
				.Include(x => x.Activities)
				.Where(x => !x.Deleted)
				.Where(x => x.Trip.CreatorId == query.UserId);

			if (!string.IsNullOrEmpty(query.SearchTerm)) 
			{
				var searchTerm = $"%{query.SearchTerm.ToLower()}%";

				itinerariesQuery = itinerariesQuery
					.Where(x => EF.Functions.Like(x.Name.ToLower(), searchTerm) ||
						EF.Functions.Like(x.Trip.Name.ToLower(), searchTerm) ||
						x.Activities.Any(a => EF.Functions.Like(a.Name.ToLower(), searchTerm)));
			}

			itinerariesQuery = query.OrderBy switch
			{
				ItinerarieSorting.Trip => itinerariesQuery
					.OrderBy(x => x.Trip.Name),
				ItinerarieSorting.Name => itinerariesQuery
					.OrderBy(x => x.Name),
				ItinerarieSorting.Date => itinerariesQuery
					.OrderBy(x => x.Date),
				_ => itinerariesQuery.OrderBy(x => x.Id)
			};

			/*
			.Skip((currentPage - 1) * housesPerPage)
                .Take(housesPerPage)
			*/

			var result = await itinerariesQuery.ToListAsync();
			return result;
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
