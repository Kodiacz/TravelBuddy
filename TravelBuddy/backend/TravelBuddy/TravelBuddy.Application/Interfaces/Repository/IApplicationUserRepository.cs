namespace TravelBuddy.Application.Interfaces.Repository
{
	public interface IApplicationUserRepository
	{
		/// <summary>
		/// Adding an ApplicationUser type entity in the database
		/// </summary>
		/// <param name="appointment">ApplicationUser type variable</param>
		/// <returns></returns>
		Task AddAsync(ApplicationUser appointment);

		/// <summary>
		/// Updating the ApplicationUser entity in the database
		/// </summary>
		/// <param name="appointment">ApplicationUser type variable</param>
		/// <returns></returns>
		void Update(ApplicationUser appointment);

		/// <summary>
		/// Gets the entity from the database by its Id
		/// </summary>
		/// <param name="id">The id of the ApplicationUser entity</param>
		/// <returns>Return the ApplicationUser entity</returns>
		Task<ApplicationUser> GetByIdAsync(int id);

		/// <summary>
		/// Gets a collection of ApplicationUser type entites
		/// </summary>
		/// <returns></returns>
		Task<ICollection<ApplicationUser>> GetAllAsync();

		/// <summary>
		/// Gets all the appointments and accepts a predicate for sarch term
		/// </summary>
		/// <returns></returns>
		Task<ICollection<ApplicationUser>> GetAllAsync(Expression<Func<ApplicationUser, bool>> search);

		/// <summary>
		/// Gets all the ApplicationUsers and uses AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<ApplicationUser>> GetAllAsReadOnlyAsync();

		/// <summary>
		/// Gets all the ApplicationUsers and accepts a predicate for sarch term also uses
		/// AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<ApplicationUser>> GetAllAsReadOnlyAsync(Expression<Func<ApplicationUser, bool>> search);

		/// <summary>
		/// Gets the entity from the database by its Id and its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the ApplicationUser entity</param>
		/// <returns>Return the ApplicationUser entity</returns>
		Task<ApplicationUser> GetByIdAsReadonlyAsync(int id);

		/// <summary>
		/// Gets the entity from the database by its Id and 
		/// applies predicate for where clause. Also its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the ApplicationUser entity</param>
		/// <param name="search">Expression that is aplpied for the where clause</param>
		/// <returns>Return the ApplicationUser entity</returns>
		Task<ApplicationUser> GetByIdAsReadonlyAsync(int id, Expression<Func<ApplicationUser, bool>> search);

		/// <summary>
		/// Saves all changes that are done
		/// </summary>
		/// <returns></returns>
		Task SaveAsync();
	}
}
