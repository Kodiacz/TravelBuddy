namespace TravelBuddy.Infrastructure.Repository
{
	public class ActivityRepository : IActivityRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public ActivityRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		/// <summary>
		/// Adding an Activity type entity in the database
		/// </summary>
		/// <param name="activity">Activity type variable</param>
		public async Task AddAsync(Activity activity)
		{
			await dbContext.AddAsync(activity);
		}

		/// <summary>
		/// Gets all the Activities and uses AsNoTracking method
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		public Task<ICollection<Activity>> GetAllAsReadOnlyAsync()
		{
			throw new NotImplementedException();
		}

		/// <summary>
		/// Gets all the Activitys and accepts a predicate for sarch term also uses
		/// AsNoTracking method
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		public Task<ICollection<Activity>> GetAllAsReadOnlyAsync(Expression<Func<Activity, bool>> search)
		{
			throw new NotImplementedException();
		}

		/// <summary>
		/// Gets a collection of Activity type entites
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		public Task<ICollection<Activity>> GetAllAsync()
		{
			throw new NotImplementedException();
		}

		/// <summary>
		/// Gets all the appointments and accepts a predicate for sarch term
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		public Task<ICollection<Activity>> GetAllAsync(Expression<Func<Activity, bool>> search)
		{
			throw new NotImplementedException();
		}

		/// <summary>
		/// Gets the entity from the database by its Id and its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Activity entity</param>
		/// <returns>Return the <see cref="Activity"/> entity</returns>
		public Task<Activity> GetByIdAsReadonlyAsync(int id)
		{
			throw new NotImplementedException();
		}

		/// <summary>
		/// Gets the entity from the database by its Id and 
		/// applies predicate for where clause. Also its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Activity entity</param>
		/// <param name="search">Expression that is aplpied for the where clause</param>
		/// <returns>Return the <see cref="Activity"/> entity</returns>
		public Task<Activity> GetByIdAsReadonlyAsync(int id, Expression<Func<Activity, bool>> search)
		{
			throw new NotImplementedException();
		}

		/// <summary>
		/// Gets the entity from the database by its Id
		/// </summary>
		/// <param name="id">The id of the <see cref="Activity"/> entity</param>
		/// <returns>Return the <see cref="Activity"/> entity</returns>
		public async Task<Activity> GetByIdAsync(int id)
		{
			var activity = await this.dbContext
				.Activities
				.Include(a => a.Itinerary)
				.FirstOrDefaultAsync(a => !a.Deleted && a.Id == id);

			return activity!;
		}

		/// <summary>
		/// Saves all changes that are done
		/// </summary>
		public async Task SaveAsync()
		{
			await this.dbContext.SaveChangesAsync();
		}

		/// <summary>
		/// Updating the Activity entity in the database
		/// </summary>
		/// <param name="appointment">Activity type variable</param>
		public void Update(Activity appointment)
		{
			throw new NotImplementedException();
		}
	}
}
