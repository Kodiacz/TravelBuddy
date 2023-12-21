namespace TravelBuddy.Application.Interfaces.Repository
{
	public interface ITripRepository
	{
		/// <summary>
		/// Adding an Trip type entity in the database
		/// </summary>
		/// <param name="appointment">Trip type variable</param>
		/// <returns></returns>
		Task AddAsync(Trip appointment);

		/// <summary>
		/// Updating the Trip entity in the database
		/// </summary>
		/// <param name="appointment">Trip type variable</param>
		/// <returns></returns>
		void Update(Trip appointment);

		/// <summary>
		/// Gets the entity from the database by its Id
		/// </summary>
		/// <param name="id">The id of the Trip entity</param>
		/// <returns>Return the Trip entity</returns>
		Task<Trip> GetByIdAsync(int id);

		/// <summary>
		/// Gets a collection of Trip type entites
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Trip>> GetAllAsync();

		/// <summary>
		/// Gets all the appointments and accepts a predicate for sarch term
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Trip>> GetAllAsync(Expression<Func<Trip, bool>> search);

		/// <summary>
		/// Gets all the Trips and uses AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Trip>> GetAllAsReadOnlyAsync();

		/// <summary>
		/// Gets all the Trips and accepts a predicate for sarch term also uses
		/// AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Trip>> GetAllAsReadOnlyAsync(Expression<Func<Trip, bool>> search);

		/// <summary>
		/// Gets the entity from the database by its Id and its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Trip entity</param>
		/// <returns>Return the Trip entity</returns>
		Task<Trip> GetByIdAsReadonlyAsync(int id);

		/// <summary>
		/// Gets the entity from the database by its Id and 
		/// applies predicate for where clause. Also its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Trip entity</param>
		/// <param name="search">Expression that is aplpied for the where clause</param>
		/// <returns>Return the Trip entity</returns>
		Task<Trip> GetByIdAsReadonlyAsync(int id, Expression<Func<Trip, bool>> search);

		/// <summary>
		/// Saves all changes that are done
		/// </summary>
		/// <returns></returns>
		Task SaveAsync();
	}
}
