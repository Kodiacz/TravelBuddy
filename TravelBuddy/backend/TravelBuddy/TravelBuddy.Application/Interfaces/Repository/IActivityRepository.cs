namespace TravelBuddy.Application.Interfaces.Repository
{
	public interface IActivityRepository
	{
		/// <summary>
		/// Adding an Activity type entity in the database
		/// </summary>
		/// <param name="appointment">Activity type variable</param>
		Task AddAsync(Activity appointment);

		/// <summary>
		/// Updating the Activity entity in the database
		/// </summary>
		/// <param name="appointment">Activity type variable</param>
		void Update(Activity appointment);

		/// <summary>
		/// Gets the entity from the database by its Id
		/// </summary>
		/// <param name="id">The id of the <see cref="Activity"/> entity</param>
		/// <returns>Return the <see cref="Activity"/> entity</returns>
		Task<Activity> GetByIdAsync(int id);

		/// <summary>
		/// Gets a collection of Activity type entites
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		Task<ICollection<Activity>> GetAllAsync();

		/// <summary>
		/// Gets all the appointments and accepts a predicate for sarch term
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		Task<ICollection<Activity>> GetAllAsync(Expression<Func<Activity, bool>> search);

		/// <summary>
		/// Gets all the Activities and uses AsNoTracking method
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		Task<ICollection<Activity>> GetAllAsReadOnlyAsync();

		/// <summary>
		/// Gets all the Activitys and accepts a predicate for sarch term also uses
		/// AsNoTracking method
		/// </summary>
		/// <returns><see cref="ICollection{T}"/> where <typeparamref name="T"/> is <typeparamref name="Activity"/></returns>
		Task<ICollection<Activity>> GetAllAsReadOnlyAsync(Expression<Func<Activity, bool>> search);

		/// <summary>
		/// Gets the entity from the database by its Id and its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Activity entity</param>
		/// <returns>Return the <see cref="Activity"/> entity</returns>
		Task<Activity> GetByIdAsReadonlyAsync(int id);

		/// <summary>
		/// Gets the entity from the database by its Id and 
		/// applies predicate for where clause. Also its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Activity entity</param>
		/// <param name="search">Expression that is aplpied for the where clause</param>
		/// <returns>Return the <see cref="Activity"/> entity</returns>
		Task<Activity> GetByIdAsReadonlyAsync(int id, Expression<Func<Activity, bool>> search);

		/// <summary>
		/// Saves all changes that are done
		/// </summary>
		Task SaveAsync();
	}
}
