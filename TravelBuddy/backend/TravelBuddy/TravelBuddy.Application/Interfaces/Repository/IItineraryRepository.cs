namespace TravelBuddy.Application.Interfaces.Repository
{
	public interface IItineraryRepository
	{
		/// <summary>
		/// Adding an Itinerary type entity in the database
		/// </summary>
		/// <param name="appointment">Itinerary type variable</param>
		/// <returns></returns>
		Task AddAsync(Itinerary appointment);

		/// <summary>
		/// Updating the Itinerary entity in the database
		/// </summary>
		/// <param name="appointment">Itinerary type variable</param>
		/// <returns></returns>
		void Update(Itinerary appointment);

		/// <summary>
		/// Gets the entity from the database by its Id
		/// </summary>
		/// <param name="id">The id of the Itinerary entity</param>
		/// <returns>Return the Itinerary entity</returns>
		Task<Itinerary> GetByIdAsync(int id);

		/// <summary>
		/// Gets a collection of Itinerary type entites
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Itinerary>> GetAllAsync();

		/// <summary>
		/// Gets all the appointments and accepts a predicate for sarch term
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Itinerary>> GetAllAsync(Expression<Func<Itinerary, bool>> search);

		/// <summary>
		/// Gets all the Itinerarys and uses AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Itinerary>> GetAllAsReadOnlyAsync();

		/// <summary>
		/// Gets all the Itinerarys and accepts a predicate for sarch term also uses
		/// AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<Itinerary>> GetAllAsReadOnlyAsync(Expression<Func<Itinerary, bool>> search);

		/// <summary>
		/// Gets the entity from the database by its Id and its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Itinerary entity</param>
		/// <returns>Return the Itinerary entity</returns>
		Task<Itinerary> GetByIdAsReadonlyAsync(int id);

		/// <summary>
		/// Gets the entity from the database by its Id and 
		/// applies predicate for where clause. Also its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the Itinerary entity</param>
		/// <param name="search">Expression that is aplpied for the where clause</param>
		/// <returns>Return the Itinerary entity</returns>
		Task<Itinerary> GetByIdAsReadonlyAsync(int id, Expression<Func<Itinerary, bool>> search);

		/// <summary>
		/// Saves all changes that are done
		/// </summary>
		/// <returns></returns>
		Task SaveAsync();
	}
}
